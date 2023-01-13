import { useEffect, useState } from "react"
import {useNavigate,Link} from "react-router-dom";

function UserDashboard() {
    const [user, setUser] = useState({})
    const navigate = useNavigate();
    
    const logout = ()=>{
        localStorage.clear();
        navigate("/")
    }

    useEffect(() => {
        let user = localStorage.getItem("loggedInUser") ? JSON.parse(localStorage.getItem("loggedInUser")) : null;
        if (user) {
            setUser(user)
        }
    }, [])
    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/applyleave">ApplyLeave</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/myleave">LeaveHistory</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={logout}>Logout</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        // <div><h1>welcome  {user.firstName} {user.lastName}</h1></div>
    )
}


export default UserDashboard