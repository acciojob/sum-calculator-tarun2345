
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let[sum,setSum] = useState(0)

  return (
    <div>
        <h1>Sum calculator</h1>
        <input type="number" placeholder="enter a number"
        onChange={(e)=>{setSum(parseInt(sum)+parseInt(e.target.value))}}/>
        <p>Sum: {sum}</p>
    </div>
  )
}

export default App
