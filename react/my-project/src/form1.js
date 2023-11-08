import { useState } from "react";
import {Button,Form,Table,InputGroup} from 'react-bootstrap';
import Newtable from "./form";

export default function Third(){
    let [names,setnames]=useState()
    return(
        <>
       
        <Table striped bordered hover border={1}>
            <tr>
                <th>Seriel no</th>
                <th>Place</th>   
                <th>Mobile no</th>   
                <th>Mobile no</th>   
            </tr>
            </Table>
            <Newtable setnames={setnames} names={names}/>
        </>
    )
}