import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick =()=>{
        console.log("Upper case was clicked" + text);
        let newText = text.toUpperCase(); 
        setText(newText)
    }
    const handleLoClick =()=>{
      console.log("Upper case was clicked" + text);
      let newText = text.toLowerCase(); 
      setText(newText)
  }
  const handleClearClick =()=>{
    // console.log("Upper case was clicked" + text);
    let newText = '';
    setText(newText)
}
    const handleOnChange =(event)=>{
        // console.log("On change");
        setText(event.target.value);
    }
     
    const handleCopy = ()=>{
      console.log("I am a copy");
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpace = () =>{    
      let newText = text .split(/[ ]+/);   
      setText(newText.join(" "))     
    }
   



    const [text,setText] = useState('Enter text here');
    // setText("enter text rani");
  return (
    <>     
    <div classname="container">
       <h1> {props.heading}</h1>
<div className="mb-3"> 

  <textarea className="form-control"  value= {text} onChange={handleOnChange}id="myBox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-2 " onClick={handleUpClick}>Convert to upper casec   </button>
<button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to upper case</button>
<button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear text</button>
<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-2" onClick={handleExtraSpace}>Remove Extra Spaces</button>


    </div>
    <div className="container my-1">
      <h2>
        your text summry
      </h2>
      <p>
       {text.split(" ").length}words and {text.length}
      </p>
      <p>
        { 0.008* text.split(" ").length} Minutes read 
      </p>
      <h2>preview</h2>
      <p>
        {text}
      </p>
    </div>

    </>
  )
}
