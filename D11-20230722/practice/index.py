number=[1,10,15,20,25,30,35,40,45,78,98,56,41,43]
for num in number:
     if num%3==0 and num%5==0:
        print("fizz and buzz")
     elif num%3==0:
        print("fizz")
     elif num%5==0:
        print("buzz")
     else:
        print(num)

