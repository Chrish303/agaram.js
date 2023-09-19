user=int(input("enter the value"))
num1=user%3
num2=user%5
if num1==0 and num2==0:
    print("fizz and buzz")
if num1==0:
    print("fizz")
elif num2==0:
    print("buzz")