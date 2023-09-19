str = "the quick brown fox jumps over the lazy dog the quick brown fox"
string=str.split()
#print(string)
dictn={}
for wrd in string:
    if wrd not in dictn:
        dictn[wrd]=1
    else:
        
        dictn[wrd]+=1
print(dictn)