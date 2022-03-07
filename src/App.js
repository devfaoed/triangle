
import React from "react"

import './App.css';

// importing code components
// import Header from './Component/Header'; 
import Box from './Component/Box';

import boxes from "./Component/boxes";

function App() {

  const [user, setUser] = React.useState(boxes)
  
  function toggle(id){
    setUser((prevUSer) => {
      return prevUSer.map((boxx) => (
        boxx.id === id ? {...boxx, on: !boxx.on} : boxx
      ))
    })
  }
  
  const boxess = user.map(ray => (
    <Box key={ray.id}  on={ray.on} toggle={() => toggle(ray.id)} />
  ))

  return (
    <div onClick={toggle}>   
      {boxess}
    </div>
  );
}

export default App;
