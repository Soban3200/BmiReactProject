import React, { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiStatus, setBmiStatus] = useState("");
  const [errorMsg,setErrorMsg]=useState("")
  
  const clearAll=()=>{
    setBmi(null)
    setBmiStatus("")
    setHeight("")
    setWeight("")
  }
  const calculateBmi = () => {
    const isValidHeight=/^\d+$/.test(height);
    const isValidWeight=/^\d+$/.test(weight);
    if (height && weight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      if (bmiValue < 18.5) {
        setBmiStatus("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setBmiStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setBmiStatus("Overweight");
      } else {
        setBmiStatus("Obese");
      }
      setErrorMsg("")
    } else {
      setBmi(null);
      setBmiStatus("");
      setErrorMsg("Please enter the valid numeric values for height and weight")
    }
  };

  return (
    <>
      <div className="bmi-calculator">
        <div className="box"></div>
        <div className="data">
          <h1>BMI Calculator</h1>
          {errorMsg && <p className="error">{errorMsg}</p> }
          <div className="input-container">
            <label htmlFor="height">Height (cm): </label>
            <input
              type="text"
              name="height"
              id="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="input-container">
            <label htmlFor="Weight">Weight (Kg) : </label>
            <input
              type="text"
              name="Weight"
              id="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>
          {bmi != null && (
            <div className="result">
              <p>Your BMI is: {bmi}</p>
              <p>Status: {bmiStatus}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
