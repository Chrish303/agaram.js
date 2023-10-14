let resume_detail={}
let temp={}
function val(get_info,key_name){
  if(key_name){
    if(resume_detail[key_name]){
      resume_detail[key_name]={...resume_detail[key_name]}
    }else{
      resume_detail[key_name]={}
    }resume_detail[key_name][get_info.name]=get_info.value
  }
  else{
    resume_detail[get_info.name]=get_info.value
  }
  display()
}

function add_item(key_name,id,tbl_id,edu_info){
  if(edu_info){
    if(!resume_detail[edu_info]){
      resume_detail[edu_info]=[]
    }
      resume_detail[edu_info].push(temp)
      let keyss=Object.keys(temp)
      let final_out=""
      for(i=0;i<keyss.length;i++){
        document.getElementById(keyss[i]).value=""
      }
    temp={}
    let ans=""
    for(i=0;i<resume_detail[edu_info].length;i++){
      let a=resume_detail[edu_info][i].institute_name
      let b=resume_detail[edu_info][i].level
      let c=resume_detail[edu_info][i].year
      let d=resume_detail[edu_info][i].percentage
      ans=ans+<tr id="${edu_info[i]}"><td>${a}</td><td>${b}</td><td>${c}</td><td>${d}</td><td><button type="button" class="btn btn-primary" onclick="del('${i}','${edu_info}')">remove</button></td></tr>
    }document.getElementById("edu_tbl").innerHTML=ans
    display()
  }else{
  if(key_name){
    if(!resume_detail[key_name]){
      resume_detail[key_name]=[]
    }
  }resume_detail[key_name].push(document.getElementById(id).value)
  document.getElementById(id).value=""
  let htmldata=""
  for(i=0;i<resume_detail[key_name].length;i++){
    htmldata=htmldata+<div id="${key_name[i]}" class="alert alert-danger"><button type="button" class="btn btn-primary" onclick="del('${[i]}','${key_name}')">remove</button><ol>${resume_detail[key_name][i]}</ol></div>
  }document.getElementById(tbl_id).innerHTML=htmldata}
  display()
}

function del(idx,key_name){
  resume_detail[key_name].splice(idx,1)
  result=document.getElementById(key_name[idx])
  result.remove()
  display()
}

function add_edu(got){
  temp[got.name]=got.value
}




function display(){
document.getElementById("show").innerHTML=JSON.stringify(resume_detail)
}
