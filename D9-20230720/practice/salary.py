unit=int(input("enter the value"))
cost=int(input("enter the vaue"))
add=unit*cost
gst=(add*0.18)
gst2=(add*0.5)
if unit<=100:
    print("pay",add+gst)
elif unit<500<=1000:
    print("pay",add+gst2+50)
else:
    print("pay")
