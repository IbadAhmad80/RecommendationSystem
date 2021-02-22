# importing libraries
import re
import nltk
import pickle
import numpy as np
import pandas as pd
from nltk.stem.porter import PorterStemmer

# establishing connection with firebase
from firebase import firebase
firebase = firebase.FirebaseApplication('https://doctorsonhand-b4ebe.firebaseio.com', None)

# requesting following specialities data from firebase
specialities = ['Allergy & Immunology', 'Cardiology', 'Dentistry', 'Dermatology', 'Family Medicine', 
                'Gastroenterology', 'General Medical Practice', 'General Surgery', 'Neurology', 
                'Obstetrics & Gynecology', 'Oncology', 'Orthoptics']

# getting all specialities data in a loop
# for first speciality, creating a dataframe, rest are appending on this 
flag = True    
for speciality in specialities:
    result = firebase.get('/' + speciality, None)
    if flag is True:
       data = pd.DataFrame(result)
       flag = False
    else:
       data = data.append(result, ignore_index=True)

# saving the the data in json format for later use
data.to_json('Firebase Data\data.txt')       

# dropping unnecessary data
cols = ['Address', 'Description', 'Qualification', 'Experience', 'Longitude', 'Latitude', 'PMDC_ID', 
        'User Rating', 'id', 'No of Users']
analysis_data = data.drop(columns = cols, axis=1)

# step 1: filtering labels which are not labelled
labels_checker = []
# to traverse rows
for i in range(0, len(analysis_data)):
    # to traverse columns
    for j in range(0, len(analysis_data.columns)):
        # if this cell is Flag_y, means not have label yet
        if analysis_data.iloc[i, j] == 'Flag_y':
           # saving this row, column, speciality
           row = i 
           column = analysis_data.columns[j].split("_")[1]
           speciality = analysis_data.loc[i]['Speciality']
           # appending this info in a list 
           labels_checker.append([row, column, speciality])

# step 2: filtering corresponding comments from step 1
comments = []
# to traverse rows
for i in range(0, len(analysis_data)):
    # to traverse columns
    for j in range(0, len(analysis_data.columns)):
        # getting every column one by one
        column = analysis_data.columns[j]
        # to match with empty labels cell from step 1
        for k in range(0, len(labels_checker)):
            # finding the corresponding comment against empty label cell
            if column == 'Comment_' + labels_checker[k][1] and i == labels_checker[k][0]:
               # appending this comment in a list for classification by passing to model later 
               comments.append(analysis_data.iloc[i, j]) 

# passing comments which are not labelled to natural language processing pipeline
# # preparing stopwords - only English language stowords used
stopwords = nltk.corpus.stopwords.words('english')
words = ['dr', 'doctor', 'surgeon', 'physician', 'dentist', 'cardiologist', 'dermatologist',
         'gynecologist', 'allergist', 'immunologist', 'gastroenterologist', 'neurologist',
         'oncologist']

# # stemming is taking root of word e.g. loved ---> love, to reduce sparsity
ps = PorterStemmer()
for word in words:
    stopwords.append(ps.stem(word)) 

# preparing corpus - same as in training the model
corpus = []
for review in comments:
    # filtering only text in comment - removing digits and punctuations 
    review = re.sub('[^a-zA-Z]', ' ', review)
    # converting in lower case to reduce sparsity
    review = review.lower()
    # tokenization
    review = review.split()
    # taking root word
    ps = PorterStemmer()
    # concatenating the tokens in a sngle sentence
    review = [ps.stem(word) for word in review if not word in stopwords]
    review = ' '.join(review) 
    # appending the clean comment in corpus
    corpus.append(review)

# loading the trained model
loaded_model = pickle.load(open('Saved Model\model.sav', 'rb'))

# testing of new data
labels = loaded_model.predict(corpus)
# # transferring back probabilities to a decimal value - 0, 1, 2
labels = np.argmax(labels, axis=1)

# putting new comments sentment score into the data
# to traverse all labels
for label in labels:
    # to traverse rows
    for i in range(0, len(analysis_data)):
        # to traverse columns
        for j in range(0, len(analysis_data.columns)):
            # to traverse to check the empty labels
            for k in range(0, len(labels_checker)):
                # finding empty labels
                if analysis_data.columns[j] == 'Label_' + labels_checker[k][1] and i == labels_checker[k][0]:
                   # assigning the label
                   analysis_data.iloc[i, j] = label 

# generating system rating
system_ratings = []
# to traverse rows
for i in range(0, len(analysis_data)):
    sentiment_score = 0
    sentiment_count = 0
    # to traverse columns
    for j in range(0, len(analysis_data.columns)):
        # finding labels columns
        if analysis_data.columns[j].find("_"):
            column = analysis_data.columns[j].split("_")[0]
            if column == 'Label':
               # getting label value on this location 
               label = analysis_data.iloc[i, j]
               # filtering appropriate labels
               if label==0 or label==1 or label==2:
                   # adding all sentiment values of a doctor
                   sentiment_score += label
                   # counting number of sentiments of a doctor
                   sentiment_count += 1 
    
    # weighted average plus previous users average rating
    rating = sentiment_score / sentiment_count + analysis_data.loc[1]['Rating']
    # appending this rating in a list
    system_ratings.append(rating)  

# reshaping the list to make compatible for scaling process
system_ratings = np.array(system_ratings).reshape(-1, 1)

# scaling this rating between 1 and 5
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler(feature_range=(1, 5)) 
scaler = scaler.fit(system_ratings)
scaled_ratings = scaler.transform(system_ratings)

# transferring back to list        
system_ratings = scaled_ratings.tolist()

# posting the new comments labels into the database
for i in range (0, len(labels_checker)):
    result2 = firebase.patch('/' + labels_checker[i][2] + '/' + str(labels_checker[i][0]) + '/', {"Label_" + str(labels_checker[i][1]): str(labels[i])})       
            
# posting the updated system rating after new comments sentiment analysis    
counter = list(data.groupby(by=['Speciality']).size())
i = 0
j = 0
for speciality in specialities:
    for k in range(0, counter[i]):
            result3 = firebase.patch('/' + speciality + '/' + str(k) + '/', {"System Rating" : system_ratings[j][0]})
            j += 1
    i += 1
    