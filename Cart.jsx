import  React from "react";
import { useState } from "react";

function Cart(props){
          const [his,sethis]=useState([]);
          function view(){
                    const v = props.data;
                    sethis((prev)=>{
                              return [...prev,v]
                    });
          }
          return(
                    <div>
                             <button onClick={view}>Get details</button>
                             {his.map((ma)=>(
                              <p>{ma}</p>
                             ))}
                    </div>
          )
}

export default Cart;