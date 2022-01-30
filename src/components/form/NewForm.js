import Card from '../UI/Card';
import classes from './NewForm.module.css';
import {useEffect, useRef, useState} from 'react';
export default function NewForm(props){

    const [formData, setFormData] = useState( {
        formId: props.formId,
        depositId: props.depositId || '',
        fat: props.fat|| '',
        protein: props.protein || '',
        lactose: props.lactose || '',
        kcal: props.kcal || '',
        volume: props.volume || '',
    });

    useEffect( () => {
        // console.log(formData);

        props.parentCallbackUpdate(formData, formData.formId);
        
    },[formData])

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));

    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, '', 2));
      };

    const deleteThis = (event) => {
        props.parentCallbackDelete(formData.formId);
    }

    
    return( <Card>
            <form className={classes.form} onSubmit={handleSubmit}>
                <div className={classes.control}>
                    <label htmlFor ='deposit'>Deposit ID</label>
                    <input
                    value={formData.depositId}
                    name="depositId"
                    type="text"
                    placeholder="Deposit ID #" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='fat'>Fat%</label>
                    <input
                    value={formData.fat}
                    name="fat"
                    type="number"
                    placeholder="Fat%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='pro'>Protein%</label>
                    <input
                    value={formData.protein}
                    name="protein"
                    type="number"
                    placeholder="Protein%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='lac'>Lactose%</label>
                    <input
                    value={formData.lactose}
                    name="lactose"
                    type="number"
                    placeholder="Lactose%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='kcal'> Kcal</label>
                    <input
                    value={formData.kcal}
                    name="kcal"
                    type="number"
                    placeholder="Kcal" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='ml'> ml</label>
                    <input
                    value={formData.volume}
                    name="volume"
                    type="number"
                    placeholder="Volume mL" 
                    onChange={handleChange}
                    />
                </div>


                <div className={classes.actions}>
                    <button type='button' onClick={deleteThis}>Remove</button>
                </div>

            </form>
        </Card>
    );
}

