import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleModeDark=(cls)=>{
    // document.body.removeAttribute('class');

    // // console.log(cls);
    // document.body.classList.add('bg-'+cls);
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }

  const toggleModeDarkGreen=()=>{ 
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#77b35e';//#77b35e
      document.body.style.color='#c9ffe4';//#c9ffe4
      showAlert("Green mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }

  const toggleModeDarkBlue=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#057a9d';//#057a9d
      document.body.style.color='#a2e5ff';//#a2e5ff
      showAlert("Blue mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert("Light mode has been enabled","success");
    }
  }

  return (
    <>
    <Router>

  <Navbar aboutText='About' title='TextUtils' mode={mode} toggleModeDark={toggleModeDark}/> 
  {/* <Navbar aboutText='About' title='TextUtils' mode={mode} toggleModeDark={toggleModeDark} toggleModeDarkGreen={toggleModeDarkGreen} toggleModeDarkBlue={toggleModeDarkBlue}/>  */}
  {/* <Alert alert={alert} /> */}
  <div className="container my-3">
  <Routes>
    {/* <Route exact path="/about" element={<About />}>
      
    </Route> */}
    <Route exact path="/" element={<TextForm showAlert={showAlert} heading='Enter your text' mode={mode} />}>
    
    </Route>
  </Routes>

  </div>
    </Router>
    </>
  );
}

export default App;
