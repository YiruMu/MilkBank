import NewForm from "../components/form/NewForm";
import {useNavigate} from 'react-router-dom';
function Entry(){
    const history = useNavigate();
   function addFormHandler(formData) {
        fetch('https://meetinngs-default-rtdb.firebaseio.com/meetup.json',
            {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                },
            }
        ).then(() =>{
            history('/');

        });

    }


    return (<section>
            <h1>Add New Form</h1>
            <NewForm onAddForm={addFormHandler}/>
        </section>
    );
}

export default Entry;
