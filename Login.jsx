import React from "react";
import { useState } from "react";

function Login(){
          const [data,setdata]=useState({
                    email:"",
                    password:""
          })
          function handleSubmit(e){
                    e.preventDefault()
                    fetch("http://localhost:3000/users",{
                              method:'POST',
                              headers:{'content-Type':'application/json'},
                              body:JSON.stringify(data)
                    })
                    .then(res=>res.json())
                    .then(da=>console.log(da))

          }

          function handleChange(e){
                    setdata({...data,[e.target.value]:e.target.value})
          }
          return(
                    <div>
                              <form onChange={e=>handleSubmit(e)}>
                                        <div class="container mt-3">
                                                  <h2>Login </h2>
                                                  <div class="card">
                                                            <div class="card-body">
                                                                      <input type="email"   placeholder="email" onChange={e=>handleChange(e)}/>
                                                                      <input type="password"  placeholder="password" onChange={e=>handleChange(e)} />
                                                                      <input type="submit" placehlder="Login" value="Login"/>
                                                            </div>
                                                  </div>
                                        </div>
                              </form>
                              
                    </div>
          )
}

export default Login;