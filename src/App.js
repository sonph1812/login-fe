import {useState} from "react";
import axios from "axios";


function App() {
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [LoginStatus, setLoginStatus] = useState("")
    axios.defaults.withCredentials = true
    const register = () => {
        axios.post("http://localhost:3000/resgiter", {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length"
            }, data: {
                username: usernameReg,
                password: passwordReg,
            }

        }).then((res) => {
            console.log(res)
        })
    }
    const login = ()=>{
        axios.post("http://localhost:3000/login",{header:{
                "Content-Type": "application/json",
            },data: JSON.stringify({
                username: usernameReg,
                password: passwordReg,
            })

        }).then((res)=>{
            console.log(res)
            if(!res.data.massage){
                setLoginStatus(false)
            }else{
                console.log(res.data)
                setLoginStatus(true)
            }
        }).catch((err)=> {
            console.log()
            console.log(err)
        })
    }

  return (
      <div>
          <h1>Sign in</h1>
          <input type="text"
          placeholder="Username..."
          onChange={(e)=> {
              setUsername(e.target.value)
          }}/>
          <input type="text"
          placeholder="Password..."
          onChange={(e)=> {
              setPassword(e.target.value)
          }}/>
          <button onClick={login}>Login</button>

      </div>
  );
}

export default App;
