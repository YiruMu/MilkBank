import React, { useState } from "react"
import {Link} from "react-router-dom"

export default function Save(props){

    const data = props.data;

    const [name, setName] = useState("")

    const handleChange = e => {
    
        setName(e.target.value)
    }

    function save() {

        let output;
        output = JSON.stringify(data, null, 4);
        console.log(data);
        const blob = new Blob([output]);
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.download = name;
        a.href = url;
        a.click();
    }

    return <div>
        Result

        <div>
            <form onSubmit={(e) => e.preventDefault()}>
                <label>
                    File Name: <input type="text" value = {name} onChange = {handleChange}/>
                </label>
                
                <Link to='/result'>
                    <button onClick={save} href='/'>Save File</button>
                </Link>
            </form>
        </div>
    </div>;
}

