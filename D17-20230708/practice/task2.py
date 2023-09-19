n=int(input("enter the number"))
for i in range(n*n,0,-1):
    print(i,end="")
    if i%n==0:
        print('\n')