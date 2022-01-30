import Save from "./Save.js"
import {useState} from 'react'


export default function Results(props) {

    const data = props.data;

    const [matches, setMatches] = useState(); 
    const [showPrint, setShowPrint] = useState(false);

    


    const isCompatible = (a, b, targetCalories) => {

        const volumeA = parseFloat(a.volume);
        const volumeB = parseFloat(b.volume);
        const kcalA = parseFloat(a.kcal);
        const kcalB = parseFloat(b.kcal);
        const proteinA = parseFloat(a.protein);
        const proteinB = parseFloat(b.protein);

        let totalVolume = volumeA + volumeB;
        let weightedSumCal = ((volumeA * kcalA) + (volumeB * kcalB)) / totalVolume;
        let weightedSumPro = ((volumeA * proteinA) + (volumeB * proteinB)) / totalVolume;

        if (weightedSumCal <= targetCalories || weightedSumPro < 1) {
            return false;
        }
        return true;
    };

    const solvePairs = (inputData, targetCalories) => {
        // [ [id1, id3], [id2, id6]  ]

        let inputs = [...inputData];
        let matchList = [];

        console.log(inputs);
        inputs.sort((a,b) => parseFloat(a.kcal) - parseFloat(b.kcal));

        console.log(inputs);
        console.log(`Target value: ${targetCalories}`);

        while (inputs.length > 0) {
            let l = 0;
            let r = 1;

            let matched = false;
            console.log('outerloop')

            while (r < inputs.length) {
                if (isCompatible(inputs[l], inputs[r], targetCalories)) {
                    matchList.push([inputs[l], inputs[r]]);
                    inputs.splice(l, 1);
                    inputs.splice(r -1, 1);
                    matched = true;
                    break;
                } else {
                    r++;
                }

                console.log('inner loop')
            }

            if (!matched) {
                inputs.splice(l, 1);
            }

        }

        console.log(`Matches: ${matchList}`);
        console.log(matchList);
        setShowPrint(true);
        setMatches(matchList);
        return matchList;
    };

    if (showPrint) {
        return (

        <Save data={matches} />
        )
    }
     else return (
        <div>
            <button type='button' onClick={() => solvePairs(data, 20)}>Generate Results</button>

            
        </div>
    )


}