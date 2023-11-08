import logo from './logo.svg';
import './App.css';
import {Button,Alert,Table} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import Header from './Head.js'
import Homed from './home.js'
import Names from './name.js'
import In from './form.js'
import Login from './login.js'
import {createBrowserRouter,RouterProvider} from "react-router-dom";




function App() {

let [Islogged,Setislogged]=useState({status:false,username:""})
const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />
  },
  {
    path: "/name",
    element: <Names Islogged={Islogged} Setislogged={Setislogged}/>
  },
  {
    path: "/home",
    element: <Homed />
  },
  {
    path: "/login",
    element: <Login Islogged={Islogged} Setislogged={Setislogged}/>
  },
  {
    path: "/change",
    element: <In />
  },
 
]);
  return (
    <div className='container'>
    
      <RouterProvider router={router} />                                                                                                                                                                                                                                 
    </div>
  )
  
  // (
  //   <div className="App">
  //       <header className="App-header"> 
      
  //       {/* <img src={logo} className="App-logo" alt="logo" /> */}
  //       {/* <p>
          
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p> */}
  //       {/* <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a> */}
  //         {/* <Alert  variant='success'>
  //         --------------------------
  //       </Alert> */}
  //       {/* <Button variant="primary" onClick={()=>Addnumber()}>change number</Button> */}
  //     </header>
  //   </div>
  // );
}

export default App;
