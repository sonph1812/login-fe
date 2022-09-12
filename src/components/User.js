import React, {useState} from 'react';
import axios from "axios";

const User = () => {
    const [usernameReg, setUsernameReg] = useState("")
    const [passwordReg, setPasswordReg] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [LoginStatus, setLoginStatus] = useState("")
    axios.defaults.withCredentials = true
    const register = () => {
        axios.post("http://localhost:3000/resgiter", {
            username: usernameReg,
            password: passwordReg,
        }).then((res) => {
            console.log(res)
        })
    }
    const login = ()=>{
        axios.post("http://localhost:3000/login",{
            username: usernameReg,
            password: passwordReg,
        }).then((res)=>{
            if(!res.data.massage){
                setLoginStatus(false)
            }else{
                console.log(res.data)
                setLoginStatus(true)
            }
        })
    }

    return (
        <div></div>
    );
}

export default User;