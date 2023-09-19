number=[1,2,3,4,5,6,7,8,9]
even=0
odd=0
for num in number:
    if num%2==0:
        even=even+1
    else:
        odd=odd+1
print("number of even number:",even)
print("nummber of odd number:",odd)
#mixedlist
mixedlist=[1,2.0,"hai","@",5,6,"&",8,9]
count=0
for mix in mixedlist:
    if type (mix)==int:
        count=count+1
print("number in mixedlist:",count)

