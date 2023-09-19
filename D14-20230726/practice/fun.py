# # #function example
# # def hello():
# #     first="christhu "
# #     last=" rajan"
# #     print(first+last)
# # hello()
# # #calling type
# # def hello(a,b):
# #     print(a+" "+b)
# # hello("christhu","rajan")
# # hello("vikash","raj")
# # hello("mohamed","azeem")
# # #user function example:
# # first=input("enter the name")
# # last=input("enter  the name")
# # def hello(a,b):
# #     print(a+b)
# # hello(first,last)
# # # task
# # first=input("enter the name")
# # def hello(gender):
# #     if a=="male":
# #         print("you are blue")
# #     else:
# #         print("invalid")
# # hello(first)
num=int(input("enter the number"))
num2=int(input("enter the number"))  
def find_odd_even(number):
    if number%2==0:
        print("even")
    else:
        print("odd")  
def max(a,b):
    if a<b:
        print("second input max")
    elif a>b:
        print("first input is max")
    elif a==b:
        print("both are same")
    else:
        print("wrong input")
max(num,num2)

find_odd_even(6)

    

