import { useState } from "react";
import Login from './login'
import { useNavigate } from "react-router";


function Reg(){

    let Navigate=useNavigate();

    const [Registername,Isregister]=useState({"name":"",
                                            "email":""});
    console.log(Registername)

    return(
        <>
        {Registername.name}
        <h1>Wellcome to CHRISH</h1>
        <form>
            <label>Name :</label>
            <input type="name" placeholder="enter your name" required="" onKeyUp={(e)=>Isregister({...Registername,name:e.target.value})}/><br></br>
            <lable>Email</lable>
            <input type="email" placeholder="enter your email" required="" onKeyUp={(e)=>Isregister({...Registername,email:e.target.value})}/><br></br>
            <button type="button" onClick={()=>Navigate('/Login')}>Register</button> 
        </form>
        </>
    )
}
export default Reg;

