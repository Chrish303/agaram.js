export default function Input(props){
    return(
    <input name={props.name} placeholder={props.placeholder} type={props.type} onChange={props.handlechange}/>
)}