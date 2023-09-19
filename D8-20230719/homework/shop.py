food1=input("enter the  name")
food2=input("enter the  name")
user_foods={"milk":1.02,"popcorn":2.5,"bread":2.5}
if (food1=="milk" and food2=="popcorn") or (food1=="popcorn" and food2=="milk"):
    print("byuing milk and popcorn",user_foods["milk"]+user_foods["popcorn"])
if (food1=="popcorn"and food2=="bread") or (food1=="bread" and food2=="popcorn"):
    print("byuing popcorn and bread",user_foods["popcorn"]+user_foods["bread"])
if (food1=="bread" and food2=="milk") or (food1=="milk" and food2=="bread"):
    print("byuing bread and milk",user_foods["bread"]+user_foods["milk"])
else:
    print("not available")
