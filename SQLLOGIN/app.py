from flask import Flask,render_template,request,redirect,url_for,session
from flask_mysqldb import MySQL

app=Flask(__name__)

app.config['MYSQL_HOST']="localhost"
app.config['MYSQL_USER']="root"
app.config['MYSQL_PASSWORD']=""
app.config['MYSQL_DB']= "flask_user"
app.config['MYSQL_UNIX_SOCKET'] = '/opt/lampp/var/mysql/mysql.sock'

mysql= MySQL(app)

@app.route("/")
def home():
    if 'username' in session:
        return render_template('home.html',username=session['username'])
    else :
        return render_template('home.html')


@app.route("/login", methods=['POST', 'GET'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        cur = mysql.connection.cursor()
        
        # Modify your SQL query to select both username and password
        cur.execute(f"SELECT username, password FROM tbl_users WHERE username='{username}'")
        user = cur.fetchone()
        cur.close()

        if user and password == user[1]:
            session["username"] = user[0]
            return redirect(url_for('home'))
        else:
            return render_template("login.html", error='Invalid username and password')
    
    return render_template("login.html")
@app.route("/register",methods=['POST','GET'])
def register():
    if request.method=='POST':
        username=request.form['username']
        password=request.form['password']

        cur =mysql.connection.cursor()
        cur.execute(f"insert into tbl_users (username,password) values ('{username}','{password}')")
        mysql.connection.commit()
        cur.close()
        return redirect(url_for('login'))
    return render_template('register.html')

if __name__=="__main__":
    app.run(debug=True)