import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import axios from "axios";
function Login() {
    const [email, setEmail] = useState("")
    const [password, setPasswod] = useState("");

    const navigate = useNavigate();

    const onPasswordChange = (e) => {
        setPasswod(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const login = (e) => {
        e.preventDefault();
        console.log(email, password)
        let data = {
            email,
            password
        }
        // fetch("http://localhost:5000/user/login",{method:"POST",body:JSON.stringify({email,password}),headers:{'Content-Type':"application/json"}}).then(function(res){
        //     return res.json()
        // }).then(function(result){
        //     console.log("result",result)
        //     localStorage.setItem("loggedInUser",JSON.stringify(result.data))
        //     if(result.data.role==="admin"){
        //         navigate("/admindashboard")
        //     }else{
        //         navigate("/userdashboard")
        //     }

        // })



        // using axios

        axios.post(`http://localhost:5000/user/login`, { ...data })
            .then(res => {
                console.log("result", res.data.data)

                localStorage.setItem("loggedInUser", JSON.stringify(res.data.data))
                if (res.data.data.role === "admin") {
                    navigate("/admindashboard")
                } else {
                    navigate("/userdashboard")
                }
            })
        //submit logc need to implement
    }
    return (
        <div className="login-form-box">
            <form className="login-form" onSubmit={(e) => login(e)}>
                <div className="login-title">
                    <h4>Login</h4>
                </div>
                <div className="form-group mt-3">
                    <label>Email address</label>
                    <input type="email" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => onEmailChange(e)} />
                </div>
                <div className="form-group mt-3">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control mt-1" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => onPasswordChange(e)} />
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit</button>
                <div><Link>Don't have an account <span className="link-color"><Link to="/signup">Signup</Link></span></Link></div>
            </form>
        </div>
    )
}

export default Login