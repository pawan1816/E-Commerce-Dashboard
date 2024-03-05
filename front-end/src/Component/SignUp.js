import React,{useState} from "react";

const SignUp=()=>{
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");
    const [email,setEmail]=useState("");
    const collectData=()=>{
        console.warn(name,email,password);
    }
    return(
        <div className="register">
            <h1>Register</h1>
            <input className="inputbox" type="text" 
            value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" />

            <input className="inputbox" type="text"
            value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <input className="inputbox" type="password"
            value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <button onClick={collectData} type="button" className="appbutton">Sign Up</button>
        </div>
    )
}

export default SignUp;