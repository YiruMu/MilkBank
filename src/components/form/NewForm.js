import Card from '../UI/Card';
import classes from './NewForm.module.css';
import {useRef, useState} from 'react';
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

    const handleChange = ({ target }) => {
        const {name, value} = target;
        setFormData((prev)=>({
            ...prev,
            [name]: value
        }));

        props.parentCallback(formData, formData.formId);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formData, '', 2));
      };

    
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
                    type="text"
                    placeholder="Fat%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='pro'>Protein%</label>
                    <input
                    value={formData.protein}
                    name="protein"
                    type="text"
                    placeholder="Protein%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='lac'>Lactose%</label>
                    <input
                    value={formData.lactose}
                    name="lactose"
                    type="text"
                    placeholder="Lactose%" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='kcal'> Kcal</label>
                    <input
                    value={formData.kcal}
                    name="kcal"
                    type="text"
                    placeholder="Kcal" 
                    onChange={handleChange}
                    />
                </div>

                <div className={classes.control}>
                    <label htmlFor ='ml'> ml</label>
                    <input
                    value={formData.volume}
                    name="volume"
                    type="text"
                    placeholder="Volume mL" 
                    onChange={handleChange}
                    />
                </div>


               { /*<div className ={classes.actions}>
                    <button>Add Entry</button>
                </div>
                */}
            </form>
        </Card>
    );
}

