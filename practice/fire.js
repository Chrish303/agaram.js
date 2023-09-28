const firebaseConfig = {
    apiKey: "AIzaSyBRiNHXz4AR0WOc6FqvRGjE2lp5IGH73EI",
    authDomain: "myapp-8a365.firebaseapp.com",
    databaseURL:"https://myapp-8a365-default-rtdb.firebaseio.com",
    projectId: "myapp-8a365",
    storageBucket: "myapp-8a365.appspot.com",
    messagingSenderId: "761393243683",
    appId: "1:761393243683:web:a1df2f76183ec6b0567396"
  };
  firebase.initializeApp(firebaseConfig);
  var db=firebase.database()
  var dataRef = db.ref("registeredUsers");

function login(){
  alert("login successfull")
  window.location="home.html"
}

function logout(){
  alert("you want want leave")
  window.location="login.html"
}

function signin(){
  alert("new register")
  window.location="regi.html"
}

function detail(){
  window.location=""
}

  function register(){
    let reg_name=document.getElementById("r_name").value
    let reg_email=document.getElementById("r_email").value
    let reg_password=document.getElementById("r_pass").value
    let details={
      name:reg_name,
      email:reg_email,
      password:reg_password
    }
    dataRef.once('value')
    .then(function(snapshot){
      let data=snapshot.val()
      if(data)

    )}
    window.location="login.html"

  }
