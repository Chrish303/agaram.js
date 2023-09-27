// let userdetails = [{
//     email: "chrishbro71@gmail.com",
//     password: "chrish123",
//     name: "CHRISH"
// },
// {
//     email: "sura@gmail.com",
//     name: "sura",
//     password: "12345"

// }
// ]
// details = JSON.stringify(userdetails)
// localStorage.setItem("user", details)
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
//   console.log(db)
  var dataRef = db.ref("registeredUsers");
  

  function register(){
    console.log('register function called');
    let reg_name=document.getElementById("r_name").value
    let reg_email=document.getElementById("r_email").value
    let reg_password=document.getElementById("r_pass").value

    let reg_data = {
            name : reg_name,
            email : reg_email,
            password : reg_password,
    }

    dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            if(data){
                data.push(reg_data);
                db.ref("registeredUsers").set(data);
            }
            else{
                console
                db.ref(`registeredUsers/${0}`).set(reg_data);
            }
        })
        window.location="login.html"
}
function regis() {
    alert("new user ")
    window.location = "register.html"
  
}
function login(){

    let user_detail=document.getElementById("email").value
    let Password=document.getElementById("pass").value
        dataRef.once('value')
        .then(function(snapshot) {
            let data = snapshot.val();
            console.log(data);
            
            if(data){
                alert('ok')
                for(i=0;i<data.length;i++){

                    if ((data[i].email==user_detail) && (data[i].password==Password))
                    {
                        alert("login successfully")
                        localStorage.setItem("loggedin",true)
                        localStorage.setItem("logname",data[i].name)
                        break;
                    }
                    else{
                        alert("Please Register First");                
                    }
                }
            }
        })
        window.location="home.html"
    }

// function login() {
//     let x = document.getElementById("email").value
//     let y = document.getElementById("pass").value
//     let xy = JSON.parse(localStorage.getItem("user"))
//     for (i = 0; i < xy.length; i++) {
//         if(xy[i].email == x && xy[i].password == y){
//             localStorage.setItem("logged", true)
//             localStorage.setItem("my",xy[i].name)
//             window.location = "home.html"}
//             else{
//                     ("please enter email&password")
//             }
          
        
//     }
   
// }

// function registers() {
//     new_data = []
//     let n_name = document.getElementById("r_name").value
//     let n_email = document.getElementById("r_email").value
//     let n_pass = document.getElementById("r_pass").value
//     if (localStorage.getItem("user")) {
//         new_data = JSON.parse(localStorage.getItem("user"))

//     }
//     new_data.push({
//         email: n_email,
//         name: n_name,
//         password: n_pass
//     })
//     alert("register successfully")
//     localStorage.setItem("user", JSON.stringify(new_data))
//     window.location = "login.ht
function logout() {
    window.location = "login.html"
    localStorage.removeItem('logged')
}
function logged() {

    if (localStorage.getItem("logged")) {
   let y= document.getElementById("nun")
       y.innerHTML=`wellcome.....!${localStorage.getItem("my")}`
    }
    else{
        window.location="login.html"
    }
}
function option() {
    name_list=JSON.parse(localStorage.getItem("user"))
    let htmldata = "";
    for (i = 0; i < name_list.length; i++) {
        n1=name_list[i].name
        n2=name_list[i].email

        htmldata = htmldata + `<tr>
                                <td id="new+'${i}'">${n1}</td>
                                <td id="old+'${i}'">${n2}</td>
                                <td><button onclick="update('${n2}')">Edit</button></td>
                                <td><button onclick="Delete('${n2}')">Delete</button></td>
                                </tr>`
                               
       
    }
    document.getElementById("deteil").style.display = "block"
    document.getElementById('table').innerHTML=htmldata
}
function Delete(b){
   
    let details=JSON.parse(localStorage.getItem("user"))
     let sdata=[]
    for ( i=0;i<details.length;i++){
       
        if(details[i].email!=b){
sdata.push(details[i])
        }
    }
    alert("are you deteled")
    localStorage.setItem("user",JSON.stringify(sdata))
    option()
}
function update(d){
    let ns=JSON.parse(localStorage.getItem("user"))
// console.log(ns)
    for( let i=0;i<ns.length;i++){
        // console.log(ns[i].email)
    //  console.log(i)
    if(d==ns[i].email){
        p1=prompt("change you email",ns[i].email)
        p2=prompt("change your name",ns[i].name)
        console.log(p1)
        if(p1!=d[i].email){
            document.getElementById(`new+'${i}'`).innerHTML=p1;
        }
        if(p2!=d[i].name){
            document.getElementById(`new+'${i}'`).innerHTML=p2;
        }
        ns[i]=({
            email:p1,
            name:p2,
            password:ns[i].password
          })
    }
    }
    // console.log(ns)
    localStorage.setItem("user",JSON.stringify(ns))
}




