import { Button,  Table, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState,useEffect } from 'react';
import Second from './form'
import Homed from './home'
import axios from 'axios'



export default function Namelist(props) {

 

    let [names, setnames] = useState(["sobith", "Sheik", "Ajay", "Ajil", "Barish", "Vikash", "Chrish"])

    const deletename = (num) => {
        let remove = names.filter((data) => num != data)
        setnames(remove)
    }

    const Editname = (Rname) => {
        alert(Rname)
    }


function Getdata(){
        axios({
            method: 'post',
            url: 'http://agaram.academy/api/action.php',
           data: {
                request : "candidate_login",
                email : "chrish@gmail.com",
                password : 12345
            },
            
          }).then(function(response){
            console.log(response.data)
          })
} 



function Apidata(){
    axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/',
        
      }).then(function(response){
        console.log(response.data)
      })
}

useEffect(()=>{
    Apidata();
    },[])  
    return (
        <>
        <Homed />
            <Table striped bordered hover border={1}>
                <tr>
                    <th>Seriel no</th>
                    <th>Names</th>
                    <th>rename</th>
                    <th>Delete</th>
                </tr>

                {names.map((n, index) => (
                    <tr>
                        <td>{index + 1}</td>
                        <td> {n}</td>
                        <td> <Button variant="info" onClick={() => Editname(n)}>rename</Button></td>
                        <td> <Button variant="danger" onClick={() => deletename(n)}>Remove</Button></td>
                    </tr>
                ))}
            </Table>
            <Button variant="info" onClick={()=>Apidata()}>Get data</Button>
            <Button variant="info" onClick={()=>Getdata()}> data</Button>
            <Second setnames={setnames} names={names} /> 
            {props.Islogged.status?"Wellcome too ":"Guest user"}
            {props.Islogged.username}
         

 </>
 )
}
