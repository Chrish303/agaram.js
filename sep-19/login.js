// let userdetails = [{
//     email: "chrishbro71@gmail.com",
//     password: "chrish123",
//     name: "CHRISH"
// },
// {
//     email: "barish71@gmail.com",
//     password: "barish123",
//     name: "BARISH"
// },
// {
//     email: "azim@gmail.com",
//     password: "azim123",
//     name: "AZIM"
// }
// ]
// let list = JSON.stringify(userdetails);
// localStorage.setItem("user", list);
function login() {
    alert("success")
}
function logincheck() {
    let login_email = document.getElementById("get").value
    let login_password = document.getElementById("pass").value
    var n = JSON.parse(localStorage.getItem("user"))
    // console.log(n)
    for (var i = 0; i < n.length; i++) {
        // console.log(n[i].email, n[i].password, n[i].name)
        var p = n[i].email
        var q = n[i].password
        var r = n[i].name
        if (p == login_email && q == login_password) {
            // alert("login success")
            document.getElementById("page").style.display = "none";
            document.getElementById("home").style.display = "block";
            document.getElementById("name").innerHTML = `WELLCOME TO !${r}`
            localStorage.setItem("loggedin", true)
            localStorage.setItem("userlog", r)
        }


    }

}
function logout() {
    document.getElementById("page").style.display = "block";
    document.getElementById("home").style.display = "none";
}
function logged() {

    if (localStorage.getItem("loggedin")) {
        y = localStorage.getItem("userlog")
        document.getElementById("name").innerHTML = `WELLCOME TO !${y}`;
        document.getElementById("page").style.display = "none";
        document.getElementById("home").style.display = "block";


    }
}
function sigin() {
    document.getElementById("reg").style.display = "block";
    document.getElementById("page").style.display = "none";

}

function regis() {
    let reg_email = document.getElementById("ul").value
    let reg_password = document.getElementById("ol").value
    let reg_name = document.getElementById("bl").value
    // pharsedatadata = localStorage.getItem("user")
    // let pharselocaldata = JSON.parse(localdata)
    if (localStorage.getItem("user")) {
        pharsedata = JSON.parse(localStorage.getItem("user"))
        pharsedata.push({
            email: reg_email,
            password: reg_password,
            name: reg_name
        })

    }
    else {
        pharsedata = []

    }
    pharsedata.push({
        email: reg_email,
        password: reg_password,
        name: reg_name
    })
    alert("register succefully")
    localStorage.setItem("user", JSON.stringify(pharsedata))
    document.getElementById("reg").style.display = "none";
    document.getElementById("page").style.display = "block";
    
}
