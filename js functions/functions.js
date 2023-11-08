var b=2;
 {
    let d=1;
    var e=1;
 }
 console.log(d)// ....o/p:' d is not declared ' because let keyword is a block scope if use inside a block that value can't  applicable for outside the scope
console.log(e) //  ......o/p:'1' because var keyword is a functional scope there is a exception if we use inside the function the can't applicable for outside the function 


////--Array Destructuring ---///////////
let capital=['CHN','MUM',"BNGLR"];
let [TN,MHRSTA,KRTKA]=capital;
console.log(KRTKA)//   ....o/p:' BNGLR ' it declaring the array value to the variable name and the variable name should not in the qoutes


//---Class --//

class Class_name{         // ... Class starts with keyword class and classname starts in camelcase




    function_name(name){
        console.log(name)
    }

}

let object_name= new Class_name    //. Create a Object to retreive the data from the class  .. Object was created by using keyword 'new';
let getdata= object_name.function_name('sheik')  //. retreive the function from the object using dot(.) opretor
console.log(getdata)    //..o/p:'sheik'

//--- Constructer ---//
class User{
    constructor(first_parameter,second_parameter){      //.. 
        this.firstparameter=first_parameter;            //....  this is a keyword that can use a parameter in whole class
        this.secondparameter =second_parameter
    }
    function_name(){
        console.log(this.first_parameter,this.secondparameter)
    }
}
let objname= new User('sheik','mohamed')        //..    whenever you pass the value from the class object  that can get in construtcter method
let getname=objname.function_name()
console.log(getname)


//---   Arrow Method    ---//


const function_name=(parameter) =>{     //..    We can declare a function inspite of function function_name() method
    function_data;
    return return_data                  //..    if you put the culry braces the return keyword is must
}
let function_data_return=function_name(argument)
console.log(function_data_return)



//---- Map function     -----//


let data=[{name:"sobith",age:20},{name:"ajil",age:21},{name:"ajay",age:22}];
let age_21=data.map((data_variable)=>{return data_variable.age})    // store the return value in array method
console.log(age_21)

//      Syntax: object_name.map((variable_name)=>{ return  variable_name.some_data})



//----  Filter Function     ----//

let datas=[{name:"sheik",age:20},{name:"ajil",age:21},{name:"ajay",age:22}];
let filter_data=datas.filter((data_item)=>{
  let s= data_item.age==20
  return s})                                    // store in oject format
console.log(filter_data)


//      Syntax: object_name.filter((variable_name)=>{ some condition  return somedata})
