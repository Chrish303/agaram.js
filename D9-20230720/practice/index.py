a=int(input("enter the number"))
b=int(input("enter the number"))
c=int(input("enter the number"))
d=int(input("enter the number"))
e=int(input("enter the number"))
num1=a+b+c
num2=num1*d*e
value=num2%2
if value==0:
    print("even")
else:
    print("odd")