# importing libraires
from selenium import webdriver
from bs4 import BeautifulSoup
import requests
import pandas as pd  

# scraping following specialities data
specialities = ['Family Medicine', 'Dentistry', 'Cardiology', 'General Surgery', 
                'Dermatology', 'Obstetrics & Gynecology', 'Allergy & Immunology', 
                'Gastroenterology', 'Neurology', 'Physical Therapy', 'Clinical Psychology', 
                'General Medical Practice', 'Oncology', 'Ear, Nose, and Throat', 'Orthoptics']
# specialities links
specialitiesLinks = ['https://www.healthgrades.com/usearch?what=family%20medicine&distances=National&practicing_specialties=ps305&pageNum=1&sort.provider=bestmatch', 
                'https://www.healthgrades.com/usearch?what=dentistry&distances=National&practicing_specialties=ps328&pageNum=1', 
                'https://www.healthgrades.com/usearch?what=cardiology&distances=National&practicing_specialties=ps127&pageNum=1', 
                'https://www.healthgrades.com/usearch?what=General%20Surgery&distances=National&practicing_specialties=ps329&pageNum=2&sort.provider=bestmatch&where=&pt=', 
                'https://www.healthgrades.com/usearch?what=Dermatology&distances=National&practicing_specialties=ps244&pageNum=1&where=&pt=', 
                'https://www.healthgrades.com/usearch?what=Obstetrics%20&distances=National&practicing_specialties=ps574&pageNum=1&where=&pt=', 
                'https://www.healthgrades.com/usearch?what=Allergy%20%26%20Immunology&entityCode=PS052&searchType=PracticingSpecialty&where=Alabaster%2C%20AL&pt=33.245079%2C-86.816223&distances=National&practicing_specialties=ps052&pageNum=1&=', 
                'https://www.healthgrades.com/usearch?what=Gastroenterology&entityCode=PS324&searchType=PracticingSpecialty&where=Alabaster%2C%20AL&pt=33.245079%2C-86.816223&distances=National&practicing_specialties=ps324&pageNum=1&=', 
                'https://www.healthgrades.com/usearch?what=Neurology&entityCode=PS534&searchType=PracticingSpecialty&where=Alabaster%2C%20AL&pt=33.245079%2C-86.816223&distances=National&pageNum=1&=', 
                'https://www.healthgrades.com/usearch?what=Physical%20Therapy&entityCode=PS766&searchType=PracticingSpecialty&where=Anniston%2C%20AL&pt=33.657108%2C-85.81945&distances=National&practicing_specialties=ps766&pageNum=1&=', 
                'https://www.healthgrades.com/usearch?what=Clinical%20Psychology&entityCode=PS185&searchType=PracticingSpecialty&where=Andalusia%2C%20AL&pt=31.31959%2C-86.495422&distances=National&practicing_specialties=ps185&pageNum=1&=',
                'https://www.healthgrades.com/usearch?what=General%20Practitioner&entityCode=PS305&searchType=PracticingSpeciality&where=Alabaster%2C%20AL&pt=33.245079%2C%20-86.816223&distances=National&practicing_specialties=ps1196&pageNum=2&sort.provider=bestmatch&state=AL',
                'https://www.healthgrades.com/usearch?what=Oncology&distances=National&practicing_specialties=ps592&pageNum=1&where=&pt=',
                'https://www.healthgrades.com/usearch?what=Ear%2C%20Nose%2C%20and%20Throat&entityCode=PS645&searchType=PracticingSpecialty&where=Alabaster%2C%20AL&pt=33.245079%2C-86.816223&distances=National&practicing_specialties=ps645&pageNum=1&=',
                'https://www.healthgrades.com/usearch?what=Orthoptics&entityCode=PS634&searchType=PracticingSpecialty&where=Birmingham%2C%20AL&pt=33.52029%2C-86.811501&distances=National&practicing_specialties=ps634&pageNum=1&='
                ]

# scraping following info about each doctor
class Doctors():
    def __init__(self):
        self.name = ""
        self.speciality = ""
        self.link = ""
        self.comments = []
        self.rating = ""

# adding all doctors into a list
doctors = [] 

# scraping all specialities     
def get_speciality():
    for k in range(0, len(specialities)):
        # creating driver
        driver = webdriver.PhantomJS(executable_path = r'D:\Hassan\Python - Web Scraping\phantomjs-2.1.1-windows\bin\phantomjs.exe')
        url = specialitiesLinks[k]
            
        # download html page
        driver.get(url)
        landing_html_page = driver.page_source
        
        # creating soup
        soup = BeautifulSoup(landing_html_page, 'lxml')
        
        # scraping all profiles
        List = soup.find_all('ul', class_ = 'card-deck')
        if len(List) == 2:
           divs = List[1].find_all('div', string = specialities[k])
        elif len(List) == 1:
           divs = List[0].find_all('div', string = specialities[k])   
    
        siblings = []
        for i in range(0, len(divs)):
            siblings.append(divs[i].find_previous_sibling())
        
        for i in range(0, len(siblings)):
            a = siblings[i].find('a')
            doctor = Doctors()
            doctor.name = a.text
            doctor.speciality = specialities[k]
            doctor.link = a['href']
            doctors.append(doctor)
        
        # closing the driver
        driver.quit()
    return doctors    


def get_Comments_Rating(doctors):
    
    for i in range(168, len(doctors)):
        driver = webdriver.PhantomJS(executable_path = r'D:\Hassan\Python - Web Scraping\phantomjs-2.1.1-windows\bin\phantomjs.exe')
        url = 'https://www.healthgrades.com' + doctors[i].link
        if 'providers' in url:
            del doctors[i]
        else:    
            driver.get(url)
            landing_html_page = driver.page_source
            
            soup = BeautifulSoup(landing_html_page, 'lxml')
            p = soup.find('p', class_ = 'score')
            strong = p.find('strong')
            doctors[i].rating = strong.text
        
        
            url = 'https://www.healthgrades.com' + doctors[i].link + '/comments'
            driver.get(url)
            landing_html_page = driver.page_source
            
            request = requests.get(url)
            if request.status_code == 200:
               soup = BeautifulSoup(landing_html_page, 'lxml')
               parentdiv = soup.find_all('div', itemprop = 'itemReviewed')
               for j in range(0, len(parentdiv)):
                   childdiv = parentdiv[j].find('div', itemprop = 'description')
                   doctors[i].comments.append(childdiv.text)
                   
            else:
               doctors[i].comments.append('null')
        driver.quit()
                
        
get_Comments_Rating(get_speciality())    

EachcommentsCount = []
for i in range(0, len(doctors)):
    EachcommentsCount.append(len(doctors[i].comments))
max(EachcommentsCount)    


commentList = []
for i in range(0, max(EachcommentsCount)):
    commentList.append(('Comment_' + str(i+1)))

    
columnNames = ['Doctor', 'Speciality', 'Comment_1', 'Comment_2', 'Comment_3', 'Comment_4',
               'Comment_5', 'Comment_6', 'Comment_7', 'Comment_8', 'Comment_9', 'Comment_10', 
               'Comment_11', 'Comment_12', 'Comment_13', 'Comment_14', 'Comment_15', 'Comment_16', 
               'Comment_17', 'Comment_18', 'Comment_19', 'Comment_20', 'Comment_21', 'Comment_22',
               'Comment_23', 'Comment_24', 'Comment_25', 'Comment_26', 'Comment_27', 'Comment_28',
               'Comment_29', 'Comment_30', 'Comment_31', 'Comment_32', 'Comment_33', 'Comment_34',
               'Comment_35', 'Comment_36', 'Comment_37', 'Comment_38', 'Comment_39', 'Comment_40',
               'Comment_41', 'Comment_42', 'Comment_43', 'Comment_44', 'Comment_45', 'Comment_46',
               'Comment_47', 'Comment_48', 'Comment_49', 'Comment_50', 'Rating']

rows = [n for n in range(0, len(doctors))]
df = pd.DataFrame(index = rows, columns = columnNames)

for i in range(0, len(doctors)):
    df.loc[df.index[i], 'Doctor'] = doctors[i].name
    df.loc[df.index[i], 'Speciality'] = doctors[i].speciality
    df.loc[df.index[i], 'Rating'] = doctors[i].rating
    k = 2
    for j in range(0, len(doctors[i].comments)):
        df.iloc[i, k] = doctors[i].comments[j]
        k = k + 1

# Cleaning Doctor Names
names = []
for name in df['Doctor']:
    name = name.split(',')[0]
    names.append(name)        

df['Doctor'] = names

# Putting in CSV File
df.to_csv('dataset.csv', index = False)

# Putting in TSV File
df.to_csv('dataset.tsv', sep = "\t", index = False)
    

  