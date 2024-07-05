import { useState } from 'react';
import "./App.css"

const JupiterTimeCalculator = () => {

const [moon, setMoon] = useState('');
const [earth, setEarth] = useState('');
const [sun, setSun] = useState('');
const [result, setResult] = useState('');

const calculateTime = () => {
    let total = parseInt(moon) + parseInt(earth) + parseInt(sun);

    if (moon === '1') total -= 2;
    if (moon === '2') total = Math.floor(total / 2);
    if (earth === '1') total += 2;
    if (earth === '2') total = 6;
    if (sun === '1') total -= parseInt(earth);
    if (sun === '2') total += parseInt(earth);

    if (total <= 2) setResult('mortin');
    else if (total <= 4) setResult('aprenoon');
    else if (total <= 5) setResult('soirning');
    else setResult('nuight');
};

return (
    <div>
        <div>
            <label>Lune: </label>
            <input type="number" value={moon} onChange={(e) => setMoon(e.target.value)} min="1" max="2" />
        </div>
        <div>
            <label>Terre: </label>
            <input type="number" value={earth} onChange={(e) => setEarth(e.target.value)} min="1" max="2" />
        </div>
        <div>
            <label>Soleil: </label>
            <input type="number" value={sun} onChange={(e) => setSun(e.target.value)} min="1" max="2" />
        </div>
        <button onClick={calculateTime} disabled={!moon || !earth || !sun}>Calcul</button>
        <div>
            <label>Résultat: </label>
            <span>{result}</span>
        </div>
    </div>
);

};

export default JupiterTimeCalculator;