// import {useState,useEffect} from 'react';
// import { Button,  Table, InputGroup } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Link } from "react-router-dom";
// import { decrement, increment,incrementByAmount, } from './counterSlice'



// export default function Login(props){

   


//     let [Logindata,setLogin]=useState({
//         email:"chrish@gmail.com",
//         password:"12345"
//     })
//     const Checklogin=()=>{
//         if (Logindata.email == "chrish@gmail.com" && Logindata.password == 12345){
//             navigate('/name')
//             props.Setislogged({status:true,username:Logindata.email}) 

//         }else{
//             props.Setislogged(false)
//             alert("login failed")
//         }
//     }


//     return(
//         <>
//        {JSON.stringify(Logindata)}
//        <br></br>
//         <label>Email:</label>
//         <input type="email" placeholder="enter your email" defaultValue={"chrish@gmail.com"} onKeyUp={
//             (e)=>
//             setLogin({...Logindata,email:(e.target.value)})
//         }>     
//         </input><br></br>
//         <label>Password:</label>
//         <input type="password" placeholder="enter your password" defaultValue={12345} onKeyUp={
//             (p)=>
//             setLogin({...Logindata,password:(p.target.value)})
//         }></input><br></br>
//         <h1>Wellcome.........{count}</h1>
//         <button type="button" onClick={()=>Checklogin()}>Login</button>
//         <button type="button" onClick={()=>dispatch(increment())}>incrementByAmount</button>
//         <button type="button" onClick={()=>dispatch(decrement())}>decrementByAmpount</button>
//         <button type="button" onClick={()=>dispatch(incrementByAmount(100))}>add</button>


//         <li>-----------
//         <Link to={`/name`}>Table page</Link>
//       </li>
//         </>
//     )
// }