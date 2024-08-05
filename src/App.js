import React ,{useState} from 'react';
import './App.css';



function App() {

  const [ name, setName] = useState('')
  const [age, setAge] = useState('')
  const [visible, setVisible] = useState(false);

  const visi = () => {
    setVisible(true)
  }

  return (
   <>
    <div className="App" >
     
     <h1>Hello</h1>
      <div>
        <label style={{padding:'10px'}}>Name</label>
        <input type='text'  onChange={(e) => setName(e.target.value)} style={{margin:'5px'}}/> 
      </div>

      <div>
        <label style={{padding:'10px'}}>Age</label>
        <input type='number'  onChange={(e) => setAge(e.target.value)}  style={{margin:'5px'}}/> 
      </div>

      <button onClick={visi}>Submit</button>
    </div>

    <div className='App'>
      {visible &&( <h1>My name is {name} and I am {age} years old.</h1>)}
    </div>
   </>
  );
}

export default App;
