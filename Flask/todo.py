from flask import Flask,render_template,request, redirect


app=Flask(__name__)

Namelist=[]

@app.route('/',methods=['GET','POST'])
def todo():
    
    if request.method == 'POST':
        Namelist.append(request.form['Stu_name'])

    return render_template('todo.html',names=Namelist)


@app.route("/delete/<deletename>",methods=['GET','POST'])
def tododelete(deletename):
    
    Namelist.remove(deletename)
    return render_template('todo.html',names=Namelist)


@app.route('/update/<indexid>',methods=['GET','POST'])    
def todoupdate(indexid):
    if request.method=="POST":
        Namelist[int(indexid)]=request.form["U_name"]
        return render_template('todo.html',names=Namelist)
    value=Namelist[int(indexid)]
    return render_template('update.html',values=value)
    




# it's run using manual
if __name__=='__main__':
    app.run(debug=True)