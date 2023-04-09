
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  return (    
    <>

<Navbar title=" TextUtils1" aboutText= "About Textutils"/>

<div className="container my-2">
<TextForm heading="enter your text here"/>
</div>


   </> 

  );
}

export default App;
