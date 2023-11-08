
import {Button,Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

function Head(){
    return (
    <>
    <h1>Chrish</h1>
    <nav>
    
    <ul>
      <li>
        <Link to={`/form`}>input page</Link>
      </li>
      <li>
        <Link to={`/name`}>Table page</Link>
      </li>
      <li>
        <Link to={`/home`}>Head page</Link>
      </li>
      <li>
        <Link to={`/login`}>Go_to_login</Link>
      </li>
    </ul>
  </nav>
            
            
            </>
    )
}


export default Head;