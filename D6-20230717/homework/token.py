total_amount=int(input("enter the amount"))
if total_amount>500 and total_amount<=1000:
    print("silver token")
elif total_amount>1000 and total_amount<=5000:
    print("golden token")
elif total_amount>5000:
    print("platinum token")
else:
    print("no token")

#example2
email=(input("enter the email"))
password=input("enter the password")
if email=="example@gmail.com" and password=="123456":
    print("you are login succesfully")
elif email=="example@gmail.com" and password!="4534":
    print("wrong password")
elif email!="examplee@gmail.com" and password=="2399":
    print("wrong emai")
else:
    print("invalid user")