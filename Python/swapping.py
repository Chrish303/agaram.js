# swapping
a=int(input("enter the value A:"))
b=int(input("enter the value B:"))
a,b=b,a
print("swapping value A",a)
print("swapping value B",b)

# function swapping
def swapping(x,y):
    x,y=y,x
    print("swapping is becomes",x)
    print("swapping is becomes",y)
a=int(input("enter the number :"))
b=int(input("enter the number :"))
swapping(a,b)