import {useState} from 'react';
import { Button,  Table, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate } from "react-router-dom";

export default function Login(props){

    const navigate = useNavigate();

    let [Logindata,setLogin]=useState({
        email:"chrish@gmail.com",
        password:"12345"
    })
    const Checklogin=()=>{
        if (Logindata.email == "chrish@gmail.com" && Logindata.password == 12345){
            navigate('/')
            props.Setislogged({status:true,username:Logindata.email}) 

        }else{
            props.Setislogged(false)
            alert("login failed")
        }
    }
    return(
        <>
       {JSON.stringify(Logindata)}
       <br></br>
        <label>Email:</label>
        <input type="email" placeholder="enter your email" defaultValue={"chrish@gmail.com"} onKeyUp={
            (e)=>
            setLogin({...Logindata,email:(e.target.value)})
        }>     
        </input><br></br>
        <label>Password:</label>
        <input type="password" placeholder="enter your password" defaultValue={12345} onKeyUp={
            (p)=>
            setLogin({...Logindata,password:(p.target.value)})
        }></input><br></br>
        <button type="button" onClick={()=>Checklogin()}>Login</button>
        <li>
        <Link to={`/name`}>Table page</Link>
      </li>
        </>
    )
}