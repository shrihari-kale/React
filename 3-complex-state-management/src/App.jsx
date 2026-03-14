import { useState } from 'react'
import UncontrolledForm from "./components/form"
import ControlledForm from "./components/controlled-form";
import './App.css'

function App() {
  const [count, setCount] = useState(0);
 
  return(
  <>
  <UncontrolledForm/>
  <ControlledForm/>
  </>
 // return <h1>app is running</h1>;
  //return <Form/>
  );
}

export default App
