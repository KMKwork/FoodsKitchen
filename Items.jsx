import { useState } from "react";
import feed from "./feed.json";
import "./index.css";
import React from "react";
import 'reactjs-popup/dist/index.css';
import Cart from "./Cart"
  



function Items(){
          const it= ["burger.jpeg","fries.jpeg","coke.jpeg","pepsi.jpeg"];
          const oreder = ["burger","fries","coke","pepsi"];
          const [i,seti]=useState([]);
          function add(e){
                  const f = e.target.value;
                  seti((prev)=>{
                    return [...prev,oreder[f]];
                  })
                  console.log(i);
          }
          return(
            <>
            <div className="cont">
              {feed.map((item,i)=>(
                <div class="card">
                <img src={require("./assets/"+it[i])} alt="Avatar" />
                <div class="container"> 
                  <h4><b>{item.name}</b></h4> 
                  <p>Price :{item.price}</p>
                    <div className="but">
                    <button id="plus" value={i} onClick={add}>+</button>
                    <button id="minus">-</button>
                    </div>
                </div>
              </div>
              ))}
            </div>
            <Cart data={i}/>
            </>
        )
}
export default Items;