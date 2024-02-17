# def vowels(test):
#     vovels="aeiouAEIOU"   
#     for i in test:
#         for j in vovels:
#             if i in j:
#                 print(i)
# names=input(str("enter the name :"))   
# vowels(names)

# vowels:
word=str(input("Enter the Word :"))
# word="Hello Word"
vowels="AEIOUaeiou"
for i in vowels:
    if i in word:
        print("vowel lettes is",i)