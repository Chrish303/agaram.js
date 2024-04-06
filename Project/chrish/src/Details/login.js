import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { LoginDetails } from "../reducer/slice";
import Home from './home'
import Lable from "./lable";
import Input from "../input";
import Button from "../button";
import *as Yup from 'yup'
import '../App.css'
import { useState } from "react";
 
function Log(){

    const [error,seterror]=useState({});

    let Navigate=useNavigate();

    let Islogin=useSelector((state)=>state.user.Logindata)
    console.log(Islogin);
    let dispatch=useDispatch();

    const handlechange=(e)=>{
    dispatch(LoginDetails({...Islogin,[e.target.name]:e.target.value}))
    console.log(Islogin)
    }

    const Login=async(e)=>{
        e.preventDefault()
        try {
        await  Validation.validate(Islogin,{abortEarly:false})
        } 
        catch (error) {
            // console.log(error.inner)
            const newerror={}
            error.inner.map((eacherror)=>{
                newerror[eacherror.path]=eacherror.message
                seterror(newerror)
            })
        }
        if(Islogin.email!==""&&Islogin.password!==""){
            Navigate('/Home')
        }
        else{
            alert("Invalid username and password")
        }
    }

    const Validation=Yup.object().shape({
        email:Yup.string().required("email is required"),
        password:Yup.string().required("password is required"),
    })

    return(
        <>
        <h1>Wellcome to login page</h1>
        <form onSubmit={Login}>
            <Lable name="Email"/>
            <Input type="email" placeholder="email" name="email" handlechange={handlechange}/><br></br>
            {error.email && <div className="error">{error.email}</div>}
            <Lable name="Password"/>
            <Input type="password" required="" placeholder="enter your password" name="password" handlechange={handlechange}/><br></br>
            {error.password && <div className="error">{error.password}</div>}
            <Button type="submit" name="login"/>
            <p>Do you have an account ?<a href="/">register</a></p>
        </form>
        </>
    )
}
export default Log;                                                                                                                                               