import './App.css';
import {useState} from 'react';
import Welcome from './Welcome';

function App() {
    const [name , setName] = useState("")
    const [submit , setSubmit] = useState(false)

    return (
        <div className='login-page'>
        <div>
            <label>Enter Your Name -</label>
            &nbsp;&nbsp;
            <input
            placeholder ="eg. Rahul Kumar"
            value ={name}
            onChange={(event)=>{setName(event.target.value)}}></input>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={()=>{setSubmit(!submit)}}>Login</button>
            </div> 
            
            {(submit && name) && <Welcome name={name}></Welcome>}

            <div>
              <p>Assignment done by Akash Tripathi (12101602)</p>
            </div>
        </div>

        
    );

}

export default App;
