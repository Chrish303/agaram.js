name=input("enter the name")
gender=input("enter the gender")
age=int(input("enter yore age"))
if (age>60):
    if gender=="male":
        print("Hi_mr"+name+"under senior citizio")
    else:
        print("Hi_mrs"+name+"under senior cotizion")
elif (age>18 and age<60):
   if(gender=="male"):
        print("hi_mr"+name+"under adult catageroy")
   else:
        print("Hi_mrs"+name+"under adult catageroy")
else:
    if(gender=="male"):
        print("hi_mr"+name+"under teenager")
    else:
        print("hi_mrs"+name+"teenager")



