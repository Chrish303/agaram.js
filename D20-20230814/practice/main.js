a = "agaram";
b = 5;
c = true;
d = 5.04;
console.log(typeof (d));
my_resume = {
    name: "christhu rajan",
    E_mail: "chrishbro71@gmail.com",
    mobile_no: "+91-9360588419",
    soft_skil: ["excel", "ms word"],
    hard_skil: "writting",
    personal_details: {
        fathres_name: "p.george",
        occupation: "cooli",
        language_known: ["tamil"],
        genter: "male",
        matterial_status: "single",
        date_of_birth: "15/05/2002",
        Qualification:[
        {n:"SSLC",
        mark:"80%"},
        {n:"HSC",
        mark:"80%"},
        {n:"B.Sc",
        mark:"70%"},
        {n:"M.Sc",
        mark:"80%"}],
        HSC:"78%",
        Degree: "B.Sc",
        experience: "reliance warehouse DEO",
        hobbies: ["criket", "football"]
    },
    Address: {
        Door_no: "2/357",
        Street: "thiruvalluvar street",
        City: "nagerkoil",
        District: "Kanyakumari",
        State: "tamilnadu",
        pincode: 629001
    }
}
// let day=["sunday","monday","thuresday"]
// console.log(day[3]);
// console.log(day.length);
// my_resume.personal_details.mother_name="jeya";
// console.log(my_resume)
// my_resume.personal_details.hobbies.push("chess")
// console.log(my_resume)
// my_resume.personal_details.language_known.push("english")
// console.log(my_resume)
// my_resume.Address.country="india";
//  console.log(my_resume)
function detail(resume){
    for(var i=0;i<resume.personal_details.Qualification.length;i++){
    console.log(i+1+"."+resume.personal_details.Qualification[i].n)
    
}
}
detail(my_resume)

function detail(resume){
    for(var i=resume.personal_details.Qualification.length-1;i>=0;i--){
    console.log(i+1+"."+resume.personal_details.Qualification[i].n)
    
}
}
detail(my_resume)

localStorage.setItem("user","chrish")
// localStorage.setItem("password",12345)

// sessionStorage.setItem("name","chrish")
// sessionStorage.setItem("pasword",12345)

var a=localStorage.getItem("user")
console.log(a)
console.log(typeof(a))