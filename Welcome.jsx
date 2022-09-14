import React from "react"


function Welcome(props){
          return(
                    <div className="welcome_text">
                              <h1>Welcome to Food's</h1>
                              <h1>Kitchen</h1>
                              <button onClick={props.gomenu}>GO TO MENU</button>
                    </div>
          )
}

export default Welcome;