import { useEffect, useState } from "react";
import {Button,Form,Table,InputGroup} from 'react-bootstrap';
import Homed from './home'

export default  function Newtable(props) {
    let [name, UpdateName] = useState("")

    

   
    return (
        <>
        
            {name}
            <input type='text' placeholder='enter your name' onKeyUp={
                (enter) =>
                 UpdateName(enter.target.value)
                 }></input>
            <Button variant="success" onClick={
                () => 
                props.setnames([...props.names, name])
                }>Success</Button>
<Button varient='info'></Button>

        </>
    )
}

