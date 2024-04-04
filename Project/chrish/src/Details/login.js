import { useNavigate } from "react-router";
import { useSelector,useDispatch } from "react-redux";
import { LoginDetails } from "../reducer/slice";
import Home from './home'
import Input from "../input";
import Button from "../button";
 
function Log(){

    let Navigate=useNavigate();

    let Islogin=useSelector((state)=>state.user.Logindata)
    console.log(Islogin);
    let dispatch=useDispatch();

    const handlechange=(e)=>{
    dispatch(LoginDetails({...Islogin,[e.target.name]:e.target.value}))
    console.log(Islogin)
    }

    const Login=(e)=>{
        e.preventDefault()
        if(Islogin.email!==""&&Islogin.password!==""){
            Navigate('/Home')
        }
        else{
            alert("Invalid username and password")
        }
    }

    return(
        <>
        <h1>Wellcome to login page</h1>
        <form onSubmit={Login}>
            {/* <lable>Email :</lable>
            <input type="email" required="" placeholder="enter your email" name="email" onChange={handlechange}></input><br></br>
            <lable>Password :</lable>
            <input type="password" required="" placeholder="enter your email" name="password" onChange={handlechange}></input><br></br>
            <button type="submit" >Login</button> */}
            <Input type="email" placeholder="email" name="email" handlechange={handlechange}/>
            <Input type="password" required="" placeholder="enter your password" name="password" handlechange={handlechange}/>
            <p>Do you have an account ?<a href="/">register</a></p>
            <Button type="submit" name="login"/>
        </form>
        </>
    )
}
export default Log;                                                                                                                                               