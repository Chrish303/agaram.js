#nestleif example
num1=int(input("enter the largest number"))
num2=int(input("enter the largest number"))
num3=int(input("enter the largest number"))
if num1>num2:
    if num1>num3:
        print("number1 is big")
if num2>num1:
    if num2>num3:
        print("number2 is big")
if num3>num1:
    if num3>num2:
        print("number3 is big")

#example
num1=int(input("enter the largest number"))
num2=int(input("enter the largest number"))
num3=int(input("enter the largest number"))
if num1>num2:
    if num1>num3:
        print("num1 is big")
elif num2>num3:
    print("num2 is big")
else:
    print("num3 is big")