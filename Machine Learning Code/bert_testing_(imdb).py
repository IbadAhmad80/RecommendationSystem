# -*- coding: utf-8 -*-
"""BERT Testing (IMDB).ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/16DCsULGrBQ6MnoG0rEkz1NBkqDCY6KoE

#**Mount the drive**
"""

from google.colab import drive
drive.mount('/content/drive')

"""#**Get GPU support**"""

import torch

if torch.cuda.is_available():       
    device = torch.device("cuda")
    print(f'There are {torch.cuda.device_count()} GPU(s) available.')
    print('Device name:', torch.cuda.get_device_name(0))

else:
    print('No GPU available, using the CPU instead.')
    device = torch.device("cpu")

"""# **Importing Libraries**"""

# Commented out IPython magic to ensure Python compatibility.
import os
import re
from tqdm import tqdm
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# %matplotlib inline

"""# **Load Flair's predicted Dataset**"""

import pandas as pd
df=pd.read_csv("/content/drive/MyDrive/FYP Datasets/Flair_Sentiment_Predictions.csv")
df.head()

"""# **Data Preprocessing**

## Label Encoding
"""

from sklearn.preprocessing import LabelEncoder

le_sentiment=LabelEncoder()

df["new_sentiment"]=le_sentiment.fit_transform(df["Predicted_Sentiment"])
df.head()

"""## Data filtering"""

def text_preprocessing(text):
    """
    - Remove entity mentions (eg. '@united')
    - Correct errors (eg. '&amp;' to '&')
    @param    text (str): a string to be processed.
    @return   text (Str): the processed string.
    """
    # Remove '@name'
    text = re.sub(r'(@.*?)[\s]', ' ', text)

    # Replace '&amp;' with '&'
    text = re.sub(r'&amp;', '&', text)

    # Remove trailing whitespace
    text = re.sub(r'\s+', ' ', text).strip()


    return text

"""# Install transformers"""

!pip install transformers

"""# **Set BERT**"""

from transformers import AdamW, get_linear_schedule_with_warmup

def initialize_model(epochs=4):
    """Initialize the Bert Classifier, the optimizer and the learning rate scheduler.
    """
    # Instantiate Bert Classifier
    bert_classifier = BertClassifier(freeze_bert=False)

    # Tell PyTorch to run the model on GPU
    bert_classifier.to(device)

    # Create the optimizer
    optimizer = AdamW(bert_classifier.parameters(),
                      lr=5e-5,    # Default learning rate
                      eps=1e-8    # Default epsilon value
                      )

    # Total number of training steps
    total_steps = len(train_dataloader) * epochs

    # Set up the learning rate scheduler
    scheduler = get_linear_schedule_with_warmup(optimizer,
                                                num_warmup_steps=0, # Default value
                                                num_training_steps=total_steps)
    return bert_classifier, optimizer, scheduler

# Specify `MAX_LEN`
MAX_LEN = 512

from torch.utils.data import TensorDataset, DataLoader, RandomSampler, SequentialSampler

"""## Set parameters of BERT"""

from transformers import BertTokenizer

# Load the BERT tokenizer
tokenizer = BertTokenizer.from_pretrained('bert-base-uncased', do_lower_case=True)

# Create a function to tokenize a set of texts
def preprocessing_for_bert(data):
    """Perform required preprocessing steps for pretrained BERT.
    @param    data (np.array): Array of texts to be processed.
    @return   input_ids (torch.Tensor): Tensor of token ids to be fed to a model.
    @return   attention_masks (torch.Tensor): Tensor of indices specifying which
                  tokens should be attended to by the model.
    """
    # Create empty lists to store outputs
    input_ids = []
    attention_masks = []

    # For every sentence...
    for sent in data:
        # `encode_plus` will:
        #    (1) Tokenize the sentence
        #    (2) Add the `[CLS]` and `[SEP]` token to the start and end
        #    (3) Truncate/Pad sentence to max length
        #    (4) Map tokens to their IDs
        #    (5) Create attention mask
        #    (6) Return a dictionary of outputs
        encoded_sent = tokenizer.encode_plus(
            text=text_preprocessing(sent),  # Preprocess sentence
            add_special_tokens=True,        # Add `[CLS]` and `[SEP]`
            max_length=MAX_LEN,                  # Max length to truncate/pad
            pad_to_max_length=True,         # Pad sentence to max length
            #return_tensors='pt',           # Return PyTorch tensor
            return_attention_mask=True      # Return attention mask
            )
        
        # Add the outputs to the lists
        input_ids.append(encoded_sent.get('input_ids'))
        attention_masks.append(encoded_sent.get('attention_mask'))

    # Convert lists to tensors
    input_ids = torch.tensor(input_ids)
    attention_masks = torch.tensor(attention_masks)

    return input_ids, attention_masks

"""## Create BERT class"""

# Commented out IPython magic to ensure Python compatibility.
# %%time
# import torch
# import torch.nn as nn
# from transformers import BertModel
# 
# # Create the BertClassfier class
# class BertClassifier(nn.Module):
#     """Bert Model for Classification Tasks.
#     """
#     def __init__(self, freeze_bert=False):
#         """
#         @param    bert: a BertModel object
#         @param    classifier: a torch.nn.Module classifier
#         @param    freeze_bert (bool): Set `False` to fine-tune the BERT model
#         """
#         super(BertClassifier, self).__init__()
#         # Specify hidden size of BERT, hidden size of our classifier, and number of labels
#         D_in, H, D_out = 768, 50, 2
# 
#         # Instantiate BERT model
#         self.bert = BertModel.from_pretrained('bert-base-uncased')
# 
#         # Instantiate an one-layer feed-forward classifier
#         self.classifier = nn.Sequential(
#             nn.Linear(D_in, H),
#             nn.ReLU(),
#             #nn.Dropout(0.5),
#             nn.Linear(H, D_out)
#         )
# 
#         # Freeze the BERT model
#         if freeze_bert:
#             for param in self.bert.parameters():
#                 param.requires_grad = False
#         
#     def forward(self, input_ids, attention_mask):
#         """
#         Feed input to BERT and the classifier to compute logits.
#         @param    input_ids (torch.Tensor): an input tensor with shape (batch_size,
#                       max_length)
#         @param    attention_mask (torch.Tensor): a tensor that hold attention mask
#                       information with shape (batch_size, max_length)
#         @return   logits (torch.Tensor): an output tensor with shape (batch_size,
#                       num_labels)
#         """
#         # Feed input to BERT
#         outputs = self.bert(input_ids=input_ids,
#                             attention_mask=attention_mask)
#         
#         # Extract the last hidden state of the token `[CLS]` for classification task
#         last_hidden_state_cls = outputs[0][:, 0, :]
# 
#         # Feed input to classifier to compute logits
#         logits = self.classifier(last_hidden_state_cls)
# 
#         return logits

"""## Function to put model in evaluation mode"""

import torch.nn.functional as F

def bert_predict(model, test_dataloader):
    """Perform a forward pass on the trained BERT model to predict probabilities
    on the test set.
    """
    # Put the model into the evaluation mode. The dropout layers are disabled during
    # the test time.
    model.eval()

    all_logits = []

    # For each batch in our test set...
    for batch in test_dataloader:
        # Load batch to GPU
        b_input_ids, b_attn_mask = tuple(t.to(device) for t in batch)[:2]

        # Compute logits
        with torch.no_grad():
            logits = model(b_input_ids, b_attn_mask)
        all_logits.append(logits)
    
    # Concatenate logits from each batch
    all_logits = torch.cat(all_logits, dim=0)

    # Apply softmax to calculate probabilities
    probs = F.softmax(all_logits, dim=1).cpu().numpy()

    return probs

"""# Function for visualization of predictions"""

from sklearn.metrics import accuracy_score, roc_curve, auc

def evaluate_roc(probs, y_true):
    """
    - Print AUC and accuracy on the test set
    - Plot ROC
    @params    probs (np.array): an array of predicted probabilities with shape (len(y_true), 2)
    @params    y_true (np.array): an array of the true values with shape (len(y_true),)
    """
    preds = probs[:, 1]
    fpr, tpr, threshold = roc_curve(y_true, preds)
    roc_auc = auc(fpr, tpr)
    print(f'AUC: {roc_auc:.4f}')
       
    # Get accuracy over the test set
    y_pred = np.where(preds >= 0.5, 1, 0)
    accuracy = accuracy_score(y_true, y_pred)
    print(f'Accuracy: {accuracy*100:.2f}%')
    
    # Plot ROC AUC
    plt.title('Receiver Operating Characteristic')
    plt.plot(fpr, tpr, 'b', label = 'AUC = %0.2f' % roc_auc)
    plt.legend(loc = 'lower right')
    plt.plot([0, 1], [0, 1],'r--')
    plt.xlim([0, 1])
    plt.ylim([0, 1])
    plt.ylabel('True Positive Rate')
    plt.xlabel('False Positive Rate')
    plt.show()

"""# Preprocessing of data to feed to BERT"""

# Run `preprocessing_for_bert` on the prediction set
print('Tokenizing data...')
pre_inputs, pre_masks = preprocessing_for_bert(df['reviews.text'])

# Create the DataLoader for our prediction set
pre_dataset = TensorDataset(pre_inputs, pre_masks)
pre_sampler = SequentialSampler(pre_dataset)
pre_dataloader = DataLoader(pre_dataset, sampler=pre_sampler, batch_size=10)

"""# **Load the saved BERT trained Model**"""

model=torch.load("/content/drive/MyDrive/FYP Datasets/trained_model1.pth")

"""# **Testing**

## Get predictions
"""

#Compute predicted probabilities on the test set
probs = bert_predict(model, pre_dataloader)

# Get predictions from the probabilities
threshold = 0.5
preds = np.where(probs[:, 1] > threshold, 1, 0)

# Number of tweets predicted non-negative
print("Number of predicted non-negative: ", preds.sum())

y_val=df['new_sentiment']

np.array(y_val)

"""## Visulaization of predicted Results"""

# Evaluate the Bert classifier
evaluate_roc(probs,y_val)

