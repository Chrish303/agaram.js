total_mark=int(input("enter the mark"))
if total_mark>92:
    print("MBBS")
elif total_mark>55 and total_mark<=92:
    print("BDS")
elif total_mark>75 or total_mark<=85:
    print("Agriculture")
else:
    print("Engeineering")