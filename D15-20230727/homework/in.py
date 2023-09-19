items_list = [
    {'name': 'Apple', 'category': 'Fruits'},
    {'name': 'Carrot', 'category': 'Vegetables'},
    {'name': 'Banana', 'category': 'Fruits'},
    {'name': 'Broccoli', 'category': 'Vegetables'},
]
def item(split):
   result={}
   fruit=[]
   veg=[]
   last=[]
   for s in split:
      cate=s["category"]
      if cate=='Fruits':
         fruit.append(s['name'])
      elif cate=='Vegetables':
         veg.append(s['name'])  
   result.update({"fruit":fruit,"vegetables":veg})
   last.append(result)
   print(result)
   print(last)
item(items_list)


