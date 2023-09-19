given  = [1,0,2,3,0,4,0,5,0]
res = []
for i in given: 
    if len(res) < len(given) : 

        if i == 0 and len(res) < (len(given)-1) :
                res+=[i,i]
        else: 
            res+=[i]
    
    else : 
          break

print('a=', res)