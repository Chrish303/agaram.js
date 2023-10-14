user_details={}
function parsedata(ele){
    user_details[ele.name]=ele.value
    console.log(user_details)    
}

function create(){
    let Name=$("#name").val()
    let Email=$("#email").val()
    let Password=$("#pass").val()
    let Aadharr=$("#aadhar").val()
    let address=$("#address").val()
    let Area=$("#area").val()
    let Phone=$("#phone").val()
    let City=$("#city").val()
    let Pincode=$("#pin").val()
    $.ajax({
        type:'post',
        url:"http://agaram.academy/api/action.php",
        data:{
            request:"create_candidate",
            "name ": Name,
            "email" : Email,
            "password" :Password,
            "Aadhar" :Aadharr ,
            "address" : address,
            "phone":Phone,
            "city":City,
            "area":Area,
            "pin":Pincode,
        },
        success: function (res) {
            console.log("response",res)
            window.location="loginmoduel.html"
            
        },
        error: function (error) {
            console.log("error",error)
        },
    })
  
}
function home(){
     Email=$("#ema").val()
     Password=$("#pwd").val()  
    $.ajax({
        type:'post',
        url:"http://agaram.academy/api/action.php",
        data:
        {
            request : "candidate_login",
            "email" :Email ,
            "password" :Password
        },
        success:function(res){
            console.log("response",res)
            window.location="listmoduel.html"
        },
        error:function(error){
            console.log("err",error)
        }
    })
}
function list(){
    $.ajax({
        type:'get',
        url:"http://agaram.academy/api/action.php",
        data:{
            request : "getAllMembers"
        },
        success:function(res){
            // console.log("response",res)
            let detail=JSON.parse(res)
            let tab=detail.data
            console.log(tab[1].id)
            let tabledata=""
        for(i=0;i<tab.length;i++){
                tabledata=tabledata+`<tr><td>${tab[i].id}</td><td>${tab[i].name}</td><td>${tab[i].email}</td><td>${tab[i].phone}</td><td>${tab[i].area}</td><td>${tab[i].address}</td><td>${tab[i].pin}</td></tr>`
            }
            $("#tbody").html(tabledata)
            // for(i=0;i<tab.length)
            
            
        },
        error:function(erro){
            console.log("error",erro)
        }
    })
}
