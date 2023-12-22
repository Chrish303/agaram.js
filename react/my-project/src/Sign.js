import {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import Update from './Userslice'
import axios from 'axios'


export default function Signin(){

    const navigate=useNavigate();

const dispatch=useDispatch();

const user=useSelector(state=>state.user)

    const [Logindata,setLogin]=useState({
        email:"",
        password:"",
        token:""
        
    })

    const Checklogin=async()=>{
        const data = () =>{
            axios.post("https://jsonplaceholder.typicode.com/posts", {Logindata}).then((response)=>{console.log(response)})
         }
        
            // let response=await axios.get("https://4c68bf26-3409-4344-a1e4-07175af6032f.mock.pstmn.io/post",Logindata)
            // dispatch(Update())
            navigate('/home')
    }

    return(
        <>
       {JSON.stringify(user)}
       <br></br>
        <label>Email:</label>
        <input type="email" placeholder="enter your email"  onKeyUp={
            (e)=>
            setLogin({...Logindata,email:(e.target.value)})
        }>    
        
        </input>
        <label>Password:</label>
        <input type="password" placeholder="enter your password" d onKeyUp={
            (p)=>
            setLogin({...Logindata,password:(p.target.value)})
        }></input>
        <button type="button" onClick={()=>Checklogin()}>Login</button>


        <li>-----------
        <Link to={`/name`}>Table page</Link>
      </li>
        </>
    )
   
}