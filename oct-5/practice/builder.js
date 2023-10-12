let resume_details = {}
let education_temp = {}
function parsedata(a, b) {
    if (b) {
        if (resume_details) {
            resume_details[b] = { ...resume_details[b] }
        }
        else {
            resume_details[b] = {}
        }
        resume_details[b][a.name] = a.value
    }
    else {
        resume_details[a.name] = a.value
    }
    display()
    // resume_details[a.name]=a.value
    // console.log(resume_details)
}
function skil(value, id, list) {
    if (!resume_details[value]) {
        resume_details[value] = []
    }
    resume_details[value].push(document.getElementById(id).value);
    document.getElementById(id).value = ""
    let details = "";
    for (i = 0; i < resume_details[value].length; i++) {
        details = details + `<div id="create" ><h5>${resume_details[value][i]}</h5> <button type="button" class="btn btn-primary" onclick="del('${[i]}','${[value]}')" >delete <span class="badge text-bg-secondary"></span> </button></div>`
    }
    document.getElementById(list).innerHTML = details
    display()
}
function del(x, z) {
    resume_details[z].splice(x, 1)
    let dele = document.getElementById("create")
    dele.remove()
    display()
}


function edu(status) {
    education_temp[status.name] = status.value
    // console.log(education_temp)
}
function finish(data) {
    if (!resume_details[data]) {
        resume_details[data] = []
    }
    resume_details[data].push(education_temp)
    dis(resume_details[data],data)
    education_temp = {}
    let keys = Object.keys(education_temp)
    for (i = 0; i < keys.length; i++) {
        document.getElementById(keys[i]).value = ""
    }
    display()
}
function dis(tata,data){
    // console.log(tata)
    let  tdd=""
    for(i=0;i<tata.length;i++){
        let tddata=""
        for(const key in tata[i]){
            tddata=tddata+`<td>${tata[i][key]}</td>`
        }
            tdd=tdd+`<tr>`+tddata+`<td> <button type="button"  onclick="rem('${i}','${data}')">&times;</button></td>`+`</tr>`
    }
    document.getElementById(data).innerHTML=tdd
}
function rem(ki,ko){
    let kili=resume_details[ko]
    let weed=[]
    for(i=0;i<kili.length;i++){
        if(i!=ki){
            weed.push(kili[i])
        }
    }
    resume_details[ko]=weed
    dis(resume_details[ko],ko)
    display()
}
function display() {
    document.getElementById("show").innerHTML = JSON.stringify(resume_details, undefined, 2)
}



function create() {
    $.ajax({
        type: "post",
        url: 'http://agaram.academy/api/action.php',
        data: {
            request: "create_resume",
            user: "chrish",
            resume: resume_details
        },
        success: function (response) {
            console.log("response", response)
        },
        error: function (fail) {
            console.log("fail", fail)
        }
    });
    window.location = "build.html"
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
            console.log("response", JSON.parse(response))
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
            id: z
        },
        success: function (response) {
            console.log("response", JSON.parse(response))
        },
        error: function (erro) {
            console.log("error", erro)
        }

    })
    get()
}
function table() {
    window.location = "build.html"
}

function showresue(id) {
    $.ajax({
        type: "get",
        url: "http://agaram.academy/api/action.php",
        data: {
            request: 'get_resume_by_id',
            user: "chrish",
            id
        },
        success: function (response) {
            // console.log("response", response)
            let res = JSON.parse(response)
            // console.log("ress", res.data)
            let deta = res.data
            // console.log(deta.data)
            let resume = JSON.parse(deta.data)
            // console.log(resume)
            let mydetails = resume
            // console.log(mydetails)
            $('#obj').html(mydetails.Objectives)
            $('#na').html(mydetails.Name)
            $('#em').html(mydetails.email)
            $("#con").html(mydetails.Contact)
            $("#dec").html(mydetails.Declaration)
            // console.log(mydetails.pers)
            let pesrsonal = mydetails.pers
            // console.log(pesrsonal)
            $("#f_name").html(pesrsonal.Father_name)
            $("#m_name").html(pesrsonal.Mother_name)
            $("#b_date").html(pesrsonal.date_of_birth)
            $("#mat").html(pesrsonal.status)
            $("#nat").html(pesrsonal.Nationality)
            $("#reg").html(pesrsonal.religion)
            $("#ci").html(pesrsonal.City)
            $("#pin").html(pesrsonal.pincode)
            $("#add").html(pesrsonal.Presitent_address)
            let education = mydetails.Qualification
            // console.log(education)
            let tabledata = ""
            for (i = 0; i < education.length; i++) {

                tabledata = tabledata + `<tr>
            <td>${education[i].institute_name}</td>
            <td>${education[i].Level}</td>
            <td>${education[i].precentage}</td>
            <td>${education[i].passing_year}</td>
            </tr>`
            }
            $("#q").html(tabledata)
            let skill = mydetails.skills
            // console.log(skill)
            let skil = ""
            for (i = 0; i < skill.length; i++) {
                skil = skil + `<li>${skill[i]}</li>`
            }
            $("#sk").html(skil)
            let language = mydetails.Language_knowns
            // console.log(language)
            let lang = ""
            for (i = 0; i < language.length; i++) {
                lang = lang + `<li>${language[i]}</li>`
            }
            $("#lan").html(lang)
        },
        error: function (fail) {
            console.log(fail)
        }
    })
}

function show() {
    $.ajax(
        {
            type: "get",
            url: "http://agaram.academy/api/action.php",
            data: {
                request: "get_user_resume",
                user: "chrish",
            },
            success: function (response) {
                let res = JSON.parse(response)
                let data = res.data;
                let tabledata = ""
                for (i = 0; i < data.length; i++) {
                    tabledata = tabledata + `<tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].user}</td>
                    <td><button type="button" class="btn btn-danger" onclick="remove('${data[i].id}')">Delete</button></td>
                    <td><a href="resume.html?id=${data[i].id}">list</a></td>
                    </tr>`
                }
                $('#tbody').html(tabledata)
            },
            error: function (err) {
                console.log('error', err)
            }
        }
    )
    $("#tbody").html(tabledata)
}
function download() {
    alert('ok')
    const page = document.getElementById('build');
    var opt = {
        margin:
            1,
        filename: 'Demopdf.pdf',
        image:
            { type: 'jpeg', quality: 0.98 },
        html2canvas:
            { scale: 2 },
        jsPDF:
            { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    // Choose the element that our invoice is rendered in.
    html2pdf().set(opt).from(page).save();
}


// var getUrlParameter = function getUrlParameter(sParam) {
//     var sPageURL = window.location.search.substring(1),
//         sURLVariables = sPageURL.split('&'),
//         sParameterName,
//         i;

//     for (i = 0; i < sURLVariables.length; i++) {
//         sParameterName = sURLVariables[i].split('=');
//         if (sParameterName[0] === sParam) {
//             return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
//         }
//     }
//     return false;
// };



