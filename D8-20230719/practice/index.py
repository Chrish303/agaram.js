age=int(input("enter the age"))
if age<3:
    print("you can get free ticket")
elif age<=3 and age<=12:
    print("you can pay 10$")
elif age>=65:
    print("you can pay 12$")
else:
    print("you have to  pay15$")