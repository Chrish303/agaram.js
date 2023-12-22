// import { useEffect, useState } from "react";
// import {Button} from 'react-bootstrap';
// import {Update} from './counterSlice'
import { useDispatch,useSelector } from 'react-redux';
import Logout from './Userslice'
import { Pages } from './page';


function Home(){
    // let [time,settime]=useState(0);
    // let [istime,setistime]=useState(true);

    // useEffect(()=>{
    //     if(istime){
    //     settime(time+1)}
    // },[istime,time])
    const dispatch=useDispatch();
const details=useSelector((state)=>state.user)
return (
    <>
   <Pages />
   {JSON.stringify(details)}
<h1>Welcome to agaram acadamey</h1>
<button type="button" onClick={()=>Logout}>log out</button>


{/* <p style={{marginTop:"300px"}}>Timer</p>
<code style={{fontSize:"26px"}}><b>{time}</b></code>
<p>&nbsp;</p>
<Button varient='info' onClick={()=>setistime(!istime)}>{istime ? "stop":"start"}</Button>{'      '}
<Button varient='info' onClick={async()=>{await setistime(false) ; settime(0)}}>Resert</Button> */}
</>
)
}

export default Home;