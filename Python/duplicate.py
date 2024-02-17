numbers=[1,2,3,4,4,4,5,1,2,6,7,8,9]
num=[]
for i in numbers:
    if i not in num:
        num.append(i)
print(num)