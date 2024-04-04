// import { useState } from "react";
// import Login from './login'
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { RegisterDetails } from "../reducer/slice"

function Reg(){

    let Navigate=useNavigate();

    let dispatch=useDispatch();

    let IsRegister=useSelector((state)=>state.user.Registerdata)
   

    const handlechange=(e)=>{
        dispatch(RegisterDetails({...IsRegister,[e.target.name]:e.target.value}))
    }

    console.log(IsRegister)
    return(
        <>
        <h1>Wellcome to CHRISH</h1>
        <form>free fire chrisrthu rajan
            <label>Name :</label>
            <input type="name" placeholder="enter your name" required="" name="name" onChange={handlechange}/><br></br>
            <lable>Email</lable>
            <input type="email" placeholder="enter your email" required="" name="email" onChange={handlechange}/><br></br>
            <label>Password :</label>
            <input type="password" placeholder="enter your password" required=""name="password" onChange={handlechange}/><br></br><label>Name :</label>
            <label>ConfirmPassword :</label>
            <input type="password" placeholder="enter your confirm password" required="" name="confirmpassword" onChange={handlechange}/><br></br><label>Name :</label>
            <label>Phone :</label>
            <input type="number" placeholder="enter your Phone" required="" name="phone" onChange={handlechange}/><br></br><label>Name :</label>
            <label>Address :</label>
            <input type="text" placeholder="enter your address" required=""name="address" onChange={handlechange}/><br></br><label>Name :</label>
            <label>City :</label>
            <input type="text" placeholder="enter your City" required="" name="city" onChange={handlechange}/><br></br><label>Name :</label>
            <label>District :</label>
            <input type="text" placeholder="enter your District" required="" name="district" onChange={handlechange}/><br></br>
            <label>State :</label>
            <input type="text" placeholder="enter your State" required="" name="state" onChange={handlechange}/><br></br>
            <button type="button" onClick={()=>Navigate('/Login')}>Register</button> 
        </form>
       
        </>
    )
}
export default Reg;

