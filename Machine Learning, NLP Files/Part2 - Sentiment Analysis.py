# importing libraries
import re
import nltk
import pickle
import numpy as np
import pandas as pd
import seaborn as sn
import matplotlib.pyplot as plt
from nltk.stem.porter import PorterStemmer
from sklearn.metrics import hamming_loss
from sklearn.metrics import accuracy_score
from sklearn.metrics import confusion_matrix
from sklearn.metrics import classification_report

# importing the dataset
dataset = pd.read_csv('Dataset\dataset.tsv', delimiter = '\t')


# understanding of the data
# # bar chart of sentiment scores
sentiments = ['Positive', 'Negative', 'Neutral'] 
plt.bar(sentiments, dataset['Sentiment'].value_counts(), width=0.4)
plt.title('Sentiment Scores')
plt.ylim(0, 6000)
for i, v in enumerate(dataset['Sentiment'].value_counts()):
    plt.text(i-0.115, v+120, " "+str(v), color='blue', va='center', fontweight='bold')
plt.show()

# # pie chart of sentiment scores
plt.pie(dataset['Sentiment'].value_counts(), explode = (0, 0, 0), 
        autopct='%1.1f%%', shadow=True, startangle=90)
plt.legend(labels = sentiments, loc='best')
plt.show()


# natural language processing pipeline
# # preparing stopwords - only English language stowords used
stopwords = nltk.corpus.stopwords.words('english')
words = ['dr', 'doctor', 'surgeon', 'physician', 'dentist', 'cardiologist', 'dermatologist',
         'gynecologist', 'allergist', 'immunologist', 'gastroenterologist', 'neurologist',
         'oncologist']

# # stemming is taking root of word e.g. loved ---> love, to reduce sparsity
ps = PorterStemmer()
for word in words:
    stopwords.append(ps.stem(word)) 

# # preparing corpus
corpus = []
for review in dataset['Comment']:
    # filtering only text in comment - removing digits and punctuations 
    review = re.sub('[^a-zA-Z]', ' ', review)
    # converting in lower case to reduce sparsity
    review = review.lower()
    # tokenization
    review = review.split()
    # taking root word
    ps = PorterStemmer()
    review = [ps.stem(word) for word in review if not word in stopwords]
    # concatenating back the tokens in a single sentence
    review = ' '.join(review) 
    # appending the clean comment in corpus
    corpus.append(review)

# creating the bag of words model - feature extraction
from sklearn.feature_extraction.text import CountVectorizer 
cv = CountVectorizer()
X = cv.fit_transform(corpus).toarray()

# getting the sentiments values from dataset 
y = dataset.iloc[:, 1].values 


# machine learing techniques
# # splitting dataset into training and testing set
from sklearn.model_selection import train_test_split
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size = 0.3)

# # models performance evaluation for best model selection
models_names = ['Naive Bayes', 'Decision Tree', 'Logistic Regression', 'Neural Network']
accuracy_scores= []
hamming_loss_ = []
confusion_matrices = []
classification_reports = []

# evaluator function to evaluate the models performance
def evaluator(y_test, y_pred):
    # accuracy score
    accuracy = round(accuracy_score(y_test, y_pred) * 100, 2)
    accuracy_scores.append(accuracy)
    
    # hamming loss - incorrect predictions % by every model 
    hamming_loss_.append(round(hamming_loss(y_test, y_pred), 2))
    
    # confusion matrix
    cm = confusion_matrix(y_test, y_pred)
    confusion_matrices.append(cm)
    
    # classification report - detailed performance report   
    report = classification_report(y_test, y_pred)
    classification_reports.append(report)

# applying naive bayes
# # fitting to training set
from sklearn.naive_bayes import GaussianNB
classifier1 = GaussianNB()
classifier1.fit(X_train, y_train)
# # predicting results on test set 
y_pred = classifier1.predict(X_test)
# # evaluating model performance
evaluator(y_test, y_pred)


# applying decision tree
# # fitting to training set
from sklearn.tree import DecisionTreeClassifier
classifier2 = DecisionTreeClassifier(criterion = 'entropy')
classifier2.fit(X_train, y_train)
# # predicting results on test set
y_pred = classifier2.predict(X_test)
# # evaluating model performance
evaluator(y_test, y_pred)


# applying logistic regression
# # fitting to training set
from sklearn.linear_model import LogisticRegression
classifier3 = LogisticRegression()
classifier3.fit(X_train, y_train)
# # predicting results on test set
y_pred = classifier3.predict(X_test)
# # evaluating model performance
evaluator(y_test, y_pred)


# applying neural network
# # importing keras libraries and packages
from keras.models import Sequential
from keras.layers import Dense
from keras.utils import to_categorical

# # intialising the neural network
classifier4 = Sequential()

# # adding the input and the first hidden layer
classifier4.add(Dense(output_dim= 3600, init = 'uniform', activation = 'relu', input_dim = 7199))

# # adding the second hidden layer
classifier4.add(Dense(output_dim= 1800, init = 'uniform', activation = 'relu'))

# # adding the output layer
classifier4.add(Dense(output_dim= 3, init = 'uniform', activation = 'softmax'))

# # compiling the neural network
classifier4.compile(optimizer = 'adam', loss = 'categorical_crossentropy', metrics = ['accuracy'])

# # fitting to training set
classifier4.fit(X_train, to_categorical(y_train), batch_size = 75, nb_epoch = 20)

# # predicting results on test set
y_pred = classifier4.predict(X_test)
# # transferring back probabilities to a decimal value - 0, 1, 2
y_pred = np.argmax(y_pred, axis=1)

# # evaluating model performance 
evaluator(y_test, y_pred)


# models peroformance evaluation graphs
# # accuracy graph
plt.bar(models_names, accuracy_scores, width=0.4)
plt.title('Models Accuracies')
plt.ylabel('Accuracy')
plt.ylim(0, 100)
for i, v in enumerate(accuracy_scores):
    plt.text(i-0.115, v+1.5, " "+str(v), color='blue', va='center', fontweight='bold')
plt.show()

# # hamming loss graph
plt.bar(models_names, hamming_loss_, width=0.4)
plt.title('Models Incorrect Predictions')
plt.ylabel('Loss')
plt.ylim(0, 1)
for i, v in enumerate(hamming_loss_):
    plt.text(i-0.115, v+0.01, " "+str(v), color='blue', va='center', fontweight='bold')
plt.show()

# # confusion matrix plot
rows = cols = 2
fig, axs = plt.subplots(nrows=rows, ncols=cols)
plt.subplots_adjust(top=0.9, bottom=0.15, left=0.05, right=0.95, 
                    hspace=0.65, wspace=0.35)
k = 0
for i in range(0, rows):
    for j in range(0, cols):
        sn.heatmap(confusion_matrices[k], annot=True, ax=axs[i, j], cmap="cool", fmt = 'd')
        axs[i, j].set_xlabel(models_names[k])
        k += 1
plt.show()


# building a pipeline consists of count vectorizer and best model - when test on new data same vocabulary
from sklearn.pipeline import Pipeline
pipe = Pipeline( [('vector', cv), ('classifier', classifier4)] )

# fiiting on complete dataset
pipe.fit(corpus, to_categorical(y))

# saving the trained model
file_name = 'Saved Model\model.sav'
pickle.dump(pipe, open(file_name, 'wb'))
