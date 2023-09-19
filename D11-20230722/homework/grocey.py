grocery_item=[
            {"item":"apple",
             "price":2.50},
            {"item":"banana",
              "price":1.70},
            {"item":"milk",
               "price":3.20},
            {"item":"bread",
            "price":2.00},
            {"item":"eggs",
             "price":2.80},
           {"item":"chees",
            "price":5.50},
           {"item":"tomatoo",
          "price":1.90},
             {"item":"potatos",
           "price":1.50},
            {"item":"chiken",
             "price":8.00}
]
budget_limit=int(input("enter the amount you have"))
selected_item=input("you want buy item")
price=0
b_value=False
for item in grocery_item:
   if item["item"]==selected_item:
    b_value=True
    price=item["price"]
if item["item"]==selected_item:
    max_quantity=budget_limit/price
    roaming_cost=budget_limit%price
    total=item["price"]*max_quantity
    if max_quantity>0:
      print(item["item"],int(max_quantity),"units-total cost:$",total)
      if roaming_cost>0:
         print("roaming amount you have",roaming_cost)
    else:
      print("sorry you did't have enough to buy an item")
else:
   print("please enter a correct item")