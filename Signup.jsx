import React from "react";
import { useState } from "react";

function Signup(){
          const [re,setre]=useState(false);
          const [data,setdata]=useState({
                    email:"",
                    password:"",
                    username:""
          })
          function handleSubmit(e){
                    e.preventDefault();
                    fetch("http://localhost:3000/users",{
                              method:'POST',
                              headers:{'content-Type':'application/json'},
                              body:JSON.stringify(data)
                    })
                    .then(res=>res.json())
                    .then(setre(da=>console.log(da)))
                    
          }
          

          function handleChange(e){
                    setdata({...data,[e.target.name]:e.target.value})
          }
          function sub(){
                    setre(true)
          }
          return(
                    <div style={{display:re?"none":"block"}}>
                              <form onChange={e=>handleSubmit(e)}>
                              <h3>Signup</h3>
                                        <div class="card">
                                                  <div class="card-body">
                                                            <input type="text" class="form-control"  placeholder="username" value={data.username} name="username" onChange={e=>handleChange(e)} />
                                                            <input type="email" class="form-control" placeholder="email" value={data.email} name="email" onChange={e=>handleChange(e)}/>
                                                            <input type="password" placeholder="password" value={data.password} name="password" onChange={e=>handleChange(e)}/>
                                                            <button type="submit" class="btn btn-primary" onClick={sub}>Register</button>       
                                                  </div>
                                        </div>
                              </form>
                    </div>
          )
}

export default Signup;