import Navbar from "./Navbar";
import Items from "./Items";
import Signup from "./Signup";
import Login from "./Login";
import Welcome from "./Welcome";
import { useState } from "react";

function App() {
  const [sign,setsign]=useState(false);
  const [wel,setwel]=useState(false);
  const[menu,setmenu]=useState(false);
  function handleClick(){
    setsign(!sign);
  }
  function welcome(){
    setwel(!wel);
  }
  function menus(){
    setmenu(!menu)
  }
  return (
    <div className="App">
      <Navbar click={handleClick} welcome={welcome}/>
      {sign?<Signup/>:<Login/>}
      {wel?<Items/>:""}
      {menu?<Items/>:""}
      <Welcome gomenu={menus}/>
    </div>
  );
}

export default App;
