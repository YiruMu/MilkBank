import classes from './Hyperform.module.css';
import {useRef} from 'react';
import { useState } from "react";

const Hyperform = () => {
    const [calorieReq, setCalorieReq] = useState(20);
    const handleSelect = (e) => {
        console.log(e.target.value);
        setCalorieReq(e.target.value);
    }
    // onChange={(e)=> setNumBatchesReq(e.target.value)} 
    //onChange={(e)=> setCalorieReq(e.target.value)} 
    return (
        <form>
      <div className="Hyperform">
        <h2> Specify Desired Calories and # of Donations </h2>
        <div className={classes.blah}>
          <label>Desired Calorie Amount: &nbsp;
          <select>
              <option selected value ="20">20</option>
              <option value = "22">22</option>
              <option value = "24">24</option>
              onChange={handleSelect}
          </select>
          </label>
          </div>
      </div>
      </form>
    );
  }
   
  export default Hyperform;

