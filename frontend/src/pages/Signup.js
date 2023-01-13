import { Link } from "react-router-dom"
import { useState } from "react";

function Signup(){
    const [email,setEmail] =useState("")
    const [password,setPasswod] = useState("");
    const [firstName,setFirstName] = useState("");
    const [lastName,setLastName] = useState("");

    const onFirstNameChange = (e)=>{
        setFirstName(e.target.value)
    }
    const onLastNameChange = (e)=>{
        setLastName(e.target.value)
    }
    const onPasswordChange = (e)=>{
        setPasswod(e.target.value)
    }

    const onEmailChange = (e)=>{
        setEmail(e.target.value)
    }

    const signup=(e)=>{
        e.preventDefault();
        console.log(email,password,firstName,lastName)
        fetch("http://localhost:5000/user/signup",
        {method:"POST",body:JSON.stringify({email,password,firstName,lastName}),
        headers:{'Content-Type':"application/json"}})
        .then(function(res){
            return res.json()
        }).then(function(result){
            console.log("result",result)
        })
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e)=>signup(e)}>
                <div className="login-title">
                    <h4>Signup</h4>
                </div>
                <div className="form-group mt-3">
                    <label>First Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter First name" value={firstName} onChange={(e)=>onFirstNameChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>Last Name</label>
                    <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter last name" value={lastName} onChange={(e)=>onLastNameChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>onEmailChange(e)}/>
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>onPasswordChange(e)}/>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Already have an account <span className="link-color"><Link to="/login">Login</Link></span></Link></div>
            </form>
        </div>
    )
}

export default Signup