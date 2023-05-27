
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (    
    <>

<Navbar title=" TextUtils1" aboutText= "About Textutils"/>

<div className="container my-2">
<TextForm heading="enter your text here"/>
{/* <About/> */}
</div>


   </> 

  );
}

export default App;
