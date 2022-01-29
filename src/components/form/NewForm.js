import Card from '../UI/Card';
import classes from './NewForm.module.css';
import {useRef} from 'react';
function NewForm(props){
    const depositInputRef = useRef();
    const fatInputRef = useRef();
    const proInputRef = useRef();
    const lacInputRef = useRef();
    const kcalInputRef = useRef();
    const mlInputRef = useRef();
    function submitHandler(event) {
        event.preventDefault();
        const enteredDeposit = depositInputRef.current.value;
        const enteredPro = proInputRef.current.value;
        const enteredLac = lacInputRef.current.value;
        const enteredKcal = kcalInputRef.current.valule;
        const enteredFat = fatInputRef.current.valule;
        const enteredMl = mlInputRef.current.valule;

        const formData ={
            deposit: enteredDeposit,
            fat: enteredFat,
            Pro: enteredPro,
            lac: enteredLac,
            kcal: enteredKcal,
            ml: enteredMl,
        };
        props.onAddForm(formData);

    }
    return( <Card>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor ='deposit'>Deposit ID</label>
                    <input type ='text' required id = 'deposit' ref={depositInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor ='fat'>Fat%</label>
                    <input type ='text' required id = 'fat' ref={fatInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor ='pro'>Protein%</label>
                    <input type ='text' required id = 'pro' ref={proInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor ='lac'>Lactose%</label>
                    <input type ='text' required id = 'lac' ref={lacInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor ='kcal'> Kcal</label>
                    <input type ='text' required id = 'kcal' ref={kcalInputRef}/>
                </div>

                <div className={classes.control}>
                    <label htmlFor ='ml'> ml</label>
                    <input type ='text' required id = 'ml' ref={mlInputRef}/>
                </div>


                <div className ={classes.actions}>
                    <button>Add Entry</button>
                </div>
            </form>
        </Card>
    );
}
export default NewForm;
