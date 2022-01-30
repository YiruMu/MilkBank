import NewForm from "../components/form/NewForm";
import {useState} from 'react';
import './Entry.css';
import {useNavigate} from 'react-router-dom';
import Hyperform from "../components/Hyperform/Hyperform.js"
import Results from "../components/results/Results.js"
import Result from "../pages/Result.js"

import { Link } from 'react-router-dom'


function Entry(){

    let showResults = false;

    const [forms, setForms] = useState([{formId: 0}]);
    const addForm = () => {
        setForms( (prevForms) => [...prevForms, {formId: forms.length}])
        console.log(forms.length)
    }

    const handleCallbackUpdate = (form, index) =>{
        let newForms = [...forms];
        newForms[index] = form;
        setForms(newForms);
    }
    const handleCallbackDelete = (index) => {
        let newForms = [...forms];

        newForms.pop(index);

        newForms.forEach( (form, i) => {
            form.formId = i
        });

        setForms(newForms);
    }

    if (showResults) {
        return (
            <Results data={forms} />
        )
    }
    else {
        return (<section>
            <Hyperform  />
            <h1>Add New Form</h1>

            {forms.map( (form) => (
            <div>
                <NewForm 
                parentCallbackUpdate={handleCallbackUpdate} 
                parentCallbackDelete={handleCallbackDelete}
                formId={form.formId}
                depositId={form.depositId}
                fat={form.fat}
                protein={form.protein}
                lactose={form.lactose}
                kcal={form.kcal}
                volume={form.volume} />
                <p>{}</p>
            </div>
            ))}

                  
     
                <div>
                        <button  onClick ={addForm}>Add Entry</button>
                </div>
                {/* <button type='button' onClick={(e) => {alert(JSON.stringify(forms, '', 2))}}>Debug</button> */}

            <Results data={forms} />
            

        </section>

    );
    }


    
}

export default Entry;
