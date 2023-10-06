resume_details = {

}
let edu_tem={

}
function parseData(a,p_key) {
   if (p_key){
    if(resume_details[p_key]){
        resume_details[p_key]={...resume_details[p_key]}
    
    }


    else{
        resume_details[p_key]={}
        resume_details[p_key][a.name]=a.value
    }
          
    }
   
    else{
        resume_details[a.name]=a.value  
}
show()
}
function skil(key,id){
    if(!resume_details[key]){
        resume_details[key]=[]
    }

resume_details[key].push(document.getElementById(id).value);
document.getElementById(id).value=""
let htmldata = "";
for(i=0;i<resume_details[key].length;i++){
    htmldata = htmldata +`<h5>${resume_details[key][i]}</h5> <button type="button" class="btn btn-primary" onclick="del(${'resume_details.key[i]'})" >
    delete <span class="badge text-bg-secondary"></span> </button>`
 

}
document.getElementById("lis").innerHTML=htmldata
                               
 show()
    }
function add(edu){
    edu_tem[edu.name]=edu.value
    console.log(edu_tem)
}
function up(d){
    if(!resume_details[d]){
        resume_details[d]=[]
       
    }
    resume_details[d].push(edu_tem)
    // let keys=Object.keys(edu_tem)
    // for(i=0;i<keys;i++){
    //  let each=data[i]
    //  document.getElementById('each').value=""
    // }

    edu_tem={}

show()
}

function show() {
    document.getElementById("display").innerHTML = JSON.stringify(resume_details, undefined, 2)
}


// const x=document.querySelector('#g,#h,#i,#j')
//        x.forEach(input => {
//          input.value="";
//         });