import UserHeader from "./UserHeader";
import { useEffect, useState } from "react"

function Balance() {

    const [user,setUser] = useState("");
    const [remaingLeave,setRemainingLeave] = useState(0)
    useEffect(() => {
        let loggedInUser = localStorage.getItem("loggedInUser");
        loggedInUser = loggedInUser ? JSON.parse(loggedInUser) : null;
        fetch(`http://localhost:5000/user/${loggedInUser.email}/balance`)
            .then(function (res) {
                return res.json()
            }).then(function (result) {
                console.log("result", result)
                let remaingLeave = Number(result.leaveCount)-Number(result.approvedLeaveCount)
                setRemainingLeave(remaingLeave)
                setUser(result)

            })
    }, [])
    return (
        <div>
            <UserHeader />
            <div className="container">
            <div className="row">
                <div className="col-sm-4">
                    <div className="card" style={{"border": "2px solid #ddd","borderLeft": "5px solid red"}}>
                        <div className="card-body">
                            <h5 className="card-title">Total Leaves</h5>
                            <p className="card-text">{user.leaveCount}</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={{"border": "2px solid #ddd","borderLeft": "5px solid cyan"}}>
                        <div className="card-body">
                            <h5 className="card-title">Leaves Taken</h5>
                            <p className="card-text">{user.approvedLeaveCount}</p>
        
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="card" style={{"border": "2px solid #ddd","borderLeft": "5px solid green"}}>
                        <div className="card-body">
                            <h5 className="card-title">Remaining Balance</h5>
                            <p className="card-text">{remaingLeave}</p>
                           
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Balance