import React, { useState } from "react"

function Result(){
    const [name, setName] = useState("")

    const handleChange = e => {
        setName(e.target.value)
    }

    const myObj = {
        ID: '67191',
        calCount: '24',
        protein: '1.2'
    }

    function save() {

        let output;
        output = JSON.stringify(myObj, null, 4);
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
            <form>
                <label>
                    File Name: <input type="text" value = {name} onChange = {handleChange}/>
                </label>
                <button onClick={save}>Save File</button>
            </form>
        </div>
    </div>;

}

export default Result;
