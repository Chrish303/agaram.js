
function Input(props){
    return (
        <input type={props.type} placeholder={props.placeholder} name={props.name} onChange={props.handlechange} />
    );
};

export default Input;