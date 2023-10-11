let resume_details={}
let education_temp={}
function parsedata(a,b){
  if(b){
    if(resume_details){
      resume_details[b]={...resume_details[b]}
    }
    else{
      resume_details[b]={}
         }
    resume_details[b][a.name]=a.value
 }
 else{
   resume_details[a.name]=a.value
     }
  display()
   // resume_details[a.name]=a.value
  // console.log(resume_details)
}
function skil(value,id,list){
 if(!resume_details[value]){
 resume_details[value]=[]
 }
resume_details[value].push(document.getElementById(id).value);
document.getElementById(id).value=""
let details= "";
for(i=0;i<resume_details[value].length;i++){
details = details +`<div id="create" ><h5>${resume_details[value][i]}</h5> <button type="button" class="btn btn-primary" onclick="del('${[i]}','${[value]}')" >delete <span class="badge text-bg-secondary"></span> </button></div>`
}
document.getElementById(list).innerHTML=details 
display()
}
function del(x,z){
resume_details[z].splice(x,1)
let  dele=document.getElementById("create")
dele.remove()
display()
}


function edu(status){
  education_temp[status.name]=status.value
  // console.log(education_temp)
}


function finish(data){
 if(!resume_details[data]){
 resume_details[data]=[]      
 }
resume_details[data].push(education_temp)
education_temp={}
let keys=Object.keys(education_temp)
for(i=0;i<keys.length;i++){
 document.getElementById(keys[i]).value=""
 }
display()
}
function display(){
document.getElementById("show").innerHTML = JSON.stringify(resume_details, undefined, 2)
}
function create() {
    $.ajax({
        type: "post",
        url: 'http://agaram.academy/api/action.php',
        data: {request:"create_resume",
        user:"chrish",
        resume:{resume_details}
    },
        success: function (response) {
        console.log("response",response)
    },
        error: function (fail) {
            console.log("fail",fail)
        }
    });
}
function get() {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "get_user_resume",
            user: "chrish",
        },
        success: function (response) {
            console.log("response",JSON.parse (response))
        },
        error: function (erro) {
            console.log("error", erro)
        }
    })
}
function remove(z) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: "delete_user_resume",
            user: "chrish",
            id:z
        },
        success: function (response) {
            console.log("response",JSON.parse (response))
        },
        error: function (erro) {
            console.log("error", erro)
        }

    })
    get()
}
function table(){
    window.location="build.html"
}
function show(){
    $.ajax(
        {
            type: "get",
            url: "http://agaram.academy/api/action.php",
            data: {
                request : "get_user_resume",
                user : "chrish",
            },
            success: function (response) {
                let res = JSON.parse(response)
                let data=res.data;
                let tabledata=""
                for(i=0;i<data.length;i++){
                    tabledata=tabledata+`<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].user}</td>
                    <td><button type="button" class="btn btn-danger" onclick="remove('${data[i].id}')">Delete</button></td>
                    </tr>`
                }
                $('#tbody').html(tabledata)
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )
    
}
// function del(a) {
//     $.ajax({
//         type: "get",
//         url: `https://jsonplaceholder.typicode.com/posts/`,
//         data: '{}',
//         success: function (response) {
//             console.log(response)
//         },
//         error: function (fail) {
//             console.log(fail)
//         }
//     });
// }


