// import { useState } from "react";
import Login from './login'
import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { RegisterDetails } from "../reducer/slice"
import Button from '../button';
import Input from '../input';
import Lable from './lable';
import *as Yup from 'yup'
import '../App.css'
import { useState } from 'react';


function Reg(){

    const [error,seterror]=useState({})

    let Navigate=useNavigate();

    let dispatch=useDispatch();

    let IsRegister=useSelector((state)=>state.user.Registerdata)
   

    const handlechange=(e)=>{
        dispatch(RegisterDetails({...IsRegister,[e.target.name]:e.target.value}))
        console.log(IsRegister)
    }
    

const Register = async(e)=>{
    e.preventDefault()

            

    try{
         let res= await  Validation.validate(IsRegister,{abortEarly:false})
    if (res){
        if(IsRegister.password===IsRegister.confirmpassword){
                Navigate('/Login')
            }
             else{
                alert("password Didn't match")
            }
    }
    }
    catch(error){
        // console.log(error.inner)
        const newerror={}
        error.inner.map((eacherror)=>{
            newerror[eacherror.path]=eacherror.message
            seterror(newerror)
        })
    }
    }

    const Validation=Yup.object().shape({
        name:Yup.string().required("name is required"),
        email:Yup.string().required("email is required"),
        password:Yup.string().required("password is required"),
        confirmpassword:Yup.string().required("confirmpassword is required"),
        phone:Yup.string().required("phone is required"),
        address:Yup.string().required("address is required"),
        city:Yup.string().required("city is required"),
        district:Yup.string().required("district is required"),
        state:Yup.string().required("state is required")
    })

   
    return(
        <>
     
        <h1>Wellcome to CHRISH</h1>
        <form onSubmit={Register}>
            
            <Lable name="Name"/>
            <Input  type="name" placeholder="enter your name" required="" name="name" onChange={handlechange}/><br></br>
            {error.name && <div className='error'>{error.name}</div> }
            <Lable name="Email"/>
            <Input type="email" placeholder="enter your email" required="" name="email" onChange={handlechange}/><br></br>
            {error.email && <div className='error'>{error.email}</div> }
            <Lable name="Password"/>
            <Input type="password" placeholder="enter your password" required=""name="password" onChange={handlechange}/><br></br><label>Name :</label>
            {error.password && <div className='error'>{error.password}</div> }
            <Lable name="Confirmpassword"/>
            <Input type="password" placeholder="enter your confirm password" required="" name="confirmpassword" onChange={handlechange}/><br></br><label>Name :</label>
            {error.confirmpassword && <div className='error'>{error.confirmpassword}</div> }
            <Lable name="Mobile Number"/>
            <Input type="number" placeholder="enter your Phone" required="" name="phone" onChange={handlechange}/><br></br><label>Name :</label>
            {error.phone && <div className='error'>{error.phone}</div> }
            <Lable name="Address"/>
            <Input type="text" placeholder="enter your address" required=""name="address" onChange={handlechange}/><br></br><label>Name :</label>
            {error.address && <div className='error'>{error.address}</div> }
            <Lable name="City"/>
            <Input type="text" placeholder="enter your City" required="" name="city" onChange={handlechange}/><br></br><label>Name :</label>
            {error.city && <div className='error'>{error.city}</div> }
            <Lable name="District"/>
            <Input type="text" placeholder="enter your District" required="" name="district" onChange={handlechange}/><br></br>
            {error.district && <div className='error'>{error.district}</div> }
            <Lable name="State"/>
            <Input type="text" placeholder="enter your State" required="" name="state" onChange={handlechange}/><br></br>
            {error.state && <div className='error'>{error.state}</div> }
            <Button type="submit" name="register"/>
            <p>Already have an account ?<a href="login">login</a></p>
        </form>
       
        </>
    )
}
export default Reg;

