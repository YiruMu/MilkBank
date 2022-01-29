import classes from './Hyperform.module.css';
import {useRef} from 'react';
import { useState } from "react";

const Hyperform = () => {
    const [calorieReq, setCalorieReq] = useState(0);
    const [numBatches, setNumBatchesReq] = useState(0);
  
    return (
      <div className="Hyperform">
        <h2> Specify Desired Calories and # of Batches </h2>
        <form>
        <div className={classes.blah}>
          <label>Desired Calorie Amount:   </label>
          <input 
            type="number" 
            required 
            value={calorieReq}
            onChange={(e) => setCalorieReq(e.target.value)}
          />
          <br />
          </div>
          <div className={classes.blah}>
          <label>Desired # of Batches:   </label>
          <input 
            type="number" 
            required 
            value={numBatches}
            onChange={(e) => setNumBatchesReq(e.target.value)}
          />
          </div>
        </form>
        <br />
      </div>
    );
  }
   
  export default Hyperform;

