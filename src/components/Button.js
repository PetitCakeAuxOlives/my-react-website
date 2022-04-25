import { useState } from "react";

const Button = (props) =>{
    let [count,setCount] = useState(props.start);
    return (
        <button className="btn text-white bg-dark mt-2 mb-3" onClick={ ()=> {setCount(count+1)} }>Click Me ! {count}</button>
    )
}

export default Button