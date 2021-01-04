import re

# Flips every 2nd word in a sentence
def spin_words(sentence):
   spinned = ''
   sentence = re.split('\s',sentence)
   for i, word in enumerate(sentence):
     if len(word) >= 5:
       word = word[::-1]
     spinned += word
     if(len(sentence) > 1 and i < len(sentence) - 1):
       spinned += ' '
   return spinned