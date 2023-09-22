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
function login() {
    let x = document.getElementById("email").value
    let y = document.getElementById("pass").value
    let xy = JSON.parse(localStorage.getItem("user"))
    for (i = 0; i < xy.length; i++) {
        if(xy[i].email == x && xy[i].password == y){
            localStorage.setItem("logged", true)
            localStorage.setItem("my",xy[i].name)
            window.location = "home.html"}
            else{
                    ("please enter email&password")
            }
          
        
    }
  
}
function regis() {
    alert("new user ")
    window.location = "register.html"
  
}
function register() {
    new_data = []
    let n_name = document.getElementById("r_name").value
    let n_email = document.getElementById("r_email").value
    let n_pass = document.getElementById("r_pass").value
    if (localStorage.getItem("user")) {
        new_data = JSON.parse(localStorage.getItem("user"))

    }
    new_data.push({
        email: n_email,
        name: n_name,
        password: n_pass
    })
    alert("register successfully")
    localStorage.setItem("user", JSON.stringify(new_data))
    window.location = "login.html"

}
function logout() {
    window.location = "login.html"
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
                                <td>${n1}</td>
                                <td>${n2}</td>
                                <td><button onclick="adata()">Edit</button></td>
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
    localStorage.setItem("user",JSON.stringify(sdata))
    option()
}



