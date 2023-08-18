import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import Alert from './component/Alert';
import About from './component/About';
function App() {
  const [alert,setalert] = useState(null);

    const showalert = (message,type) =>{
          setalert({
            msg: message,
            type: type
          })
          
          setTimeout(() => {
            setalert(null)
          }, 2000);
    }
  return (
    <>
       <Navbar title="adarsh" />
       <Alert alert={alert}/>
       <div className="container">
        {/* <About/> */}
       <Textform showalert={showalert} heading="Enter the text below to analyze" />
       </div>
 
    </>
  );
}

export default App;
