# normal palindrome
string=input(("Enter a letter:"))  
if(string==string[::-1]):  
      print("The letter is a palindrome")  
else:  
      print("The letter is not a palindrome")  


# Function palindrome:
def palindrome(test):
    name=""
    for i in test:
        name=i+name
    if name==test:
        print(name,"is palindrome")   
    else:
        print(name,"is not palindrome")
value=input(str("enter the value  :"))
palindrome(value)