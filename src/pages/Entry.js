import NewForm from "../components/form/NewForm";
import {useState} from 'react';
import './Entry.css';
import {useNavigate} from 'react-router-dom';
import Hyperform from "../components/Hyperform/Hyperform.js"

function Entry(){
    


    const [forms, setForms] = useState([{formId: 0}]);
    const addForm = () => {
        setForms( (prevForms) => [...prevForms, {formId: forms.length}])
        console.log(forms.length)
    }

    const handleCallback = (form, index) =>{
        let newForms = [...forms];

        newForms[index] = form;


        setForms(newForms);
    }


    return (<section>
            <Hyperform  />
            <h1>Add New Form</h1>

            {forms.map( (form) => (
            <div>
                <NewForm parentCallback={handleCallback} 
                formId={form.formId}
                firstName={form.firstName}
                lastName={form.lastName}
                bday={form.bday}
                password={form.password} />
            </div>
            ))}
            
            
                <div>
                        <button  onClick ={addForm}>Add Entry</button>
                </div>
            
        </section>
    );
}

export default Entry;
