user=input("Enter The Word: ")
word=""
for i in user:
    word=i+word
if word==user:
    print("This Is Palindrome")
else:
    print("Not a Palindrome")