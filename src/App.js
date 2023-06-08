
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState('light');
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
    }  
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  
  }
  return (    
    <>

<Navbar title=" TextUtils1"  mode={mode} toggleMode={toggleMode} />

<div className="container my-2">
<TextForm heading="enter your text here" mode={mode}/>
{/* <About/> */}
</div>


   </> 

  );
}

export default App;
