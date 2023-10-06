const firebaseConfig = {


  apiKey: "AIzaSyA95ihC-LnszUkBiBHjbDFobzlAO7yIz4o",

  authDomain: "login-register-ae0a0.firebaseapp.com",

  databaseURL: "https://myapp-8a365-default-rtdb.firebaseio.com/",

  projectId: "login-register-ae0a0",

  storageBucket: "login-register-ae0a0.appspot.com",

  messagingSenderId: "409114406393",

  appId: "1:409114406393:web:cf66315662dc3669126128"

};

firebase.initializeApp(firebaseConfig);

let alldata = []
let db = firebase.database();
let auth= firebase.auth();
let dataes = db.ref("user");

// // let loginform=db.ref("user")
// let userDetails=[
//         {
//         email:"ajilj@gmail.com",
//         password:"12345678",
//         name:"Ajil"
//     },
//     {
//         email:"sobith@gmail.com",
//         password:"987654",
//         name:"Sobith"
//     },
//     {
//         email:"ajay@gmail.com",
//         password:"987654",
//         name:"ajay"
//     }
//     ]
//     let a=db.ref("user").set(userDetails)
//     console.log(a)
// //     // let ref = firebase.database().ref("/userProfile/"+this.userId);

// //     loginformDB.child("workouts").push(userDetails);
//     // localStorage.setItem("user",JSON.stringify(userDetails))
function loger() {
  alert("Success")
}

// function validation(){
//     let emailfmt= /^[a-zA-Z0-9]+@gamil\.com$/
// }

function loginCheck() {
  let login_email = document.getElementById("emails").value;
  let login_password = document.getElementById("passwords").value;
   
  auth.signInWithEmailAndPassword(login_email,login_password).then(function(){
      let user=currentuser;
  })

  dataes.once(value).then(shot => {
      let data = shot.val();
      console.log(data)

      for (let i = 0; i < data.length; i++) {
          var e = data[i].email
          var p = data[i].password
          var n = data[i].name
          // console.log(details[i].email,details[i].password,details[i].name)
          if (e == login_email && p == login_password) {
              localStorage.setItem("loggedIn", true)
              localStorage.setItem("loginperson", n)

              window.location = "home1.html"
              box()

              alert("Success")

          }
      }
  })
}


function logout() {
  localStorage.removeItem("loggedIn")
  window.location = "login1.html"
}
function register() {
  let name_obj = document.getElementById("name").value;
  let email_obj = document.getElementById("email").value;
  let password_obj = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email_obj,password_obj).then(function(){
      let user= auth.currentuser;

  })

  dataes.once(value).then(shot => {
      let data = shot.val();
      console.log(data)

      for (i = 0; i < data.length; i++) {
          if (email_obj != data[i].email) {
              reg_data = {
                  email: email_obj,
                  password: password_obj,
                  name: name_obj
              }

              if (data) {
                  data.push(reg_data);
                  db.ref('user').set(data);
              }
              else {
                  db.ref(user/`${0}`).set(reg_data);
              }

              alert("succesfully registred.login")
              window.location = "login1.html"
          }
          else if (email_obj === data[i].email) {
              alert("your email is already registered")
              break
          }
      }
  })
}

function regpage() {
  window.location = "regi1.html"
}



// // let list=["a","b","c"];
function box() {
  let person = localStorage.getItem("loginperson")
  document.getElementById("intro").innerHTML = Welcome ${person}

  dataes.once(value).then(shot => {
      let data = shot.val();

      // let o_list=data;

      // console.log(o_list)
