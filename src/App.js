import React from "react";
import Login from "./Registration/Login";
import Register from "./Registration/Register";
import './App.css'

const App=()=>{
  
  return(
    <React.Fragment>
       <Login/>
      <Register/>
    </React.Fragment>
   
  );
}
export default App;