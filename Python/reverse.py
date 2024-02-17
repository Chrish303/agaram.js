def reverse(number):
    a= str(number)[::-1]
    return a
number=12345
reversed_number=reverse(number)
print(reversed_number)

# palindrome reverse
number=int(input("Enter the Number :"))
dev=0
rev=0
temp=number
while(number>0):
    dev=number%10
    rev=(rev*10)+dev
    number=number//10
if temp==rev:
    print("Its a palindrome")
else:
    print("Its not a polindrome")
