import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import UserHeader from "./UserHeader";

function ApplyLeave() {
    const [username, setUserName] = useState("")
    const [reason, setReason] = useState("")
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [leaveType, setLeaveType] = useState("");

    useEffect(() => {
        let loggedInUser = localStorage.getItem("loggedInUser");
        loggedInUser = loggedInUser ? JSON.parse(loggedInUser) : null;
        setUserName(loggedInUser.email)
    }, [])

    const navigate = useNavigate();

    const onReasonChange = (e) => {
        setReason(e.target.value)
    }
    const onStartDateChange = (e) => {
        setStartDate(e.target.value)
    }
    const onEndDateChange = (e) => {
        setEndDate(e.target.value)
    }

    const onLeaveTypeChange = (e) => {
        setLeaveType(e.target.value)
    }

    const applyLeave = (e) => {
        e.preventDefault();
        fetch("http://localhost:5000/userleave/apply",
            {
                method: "POST", body: JSON.stringify({ reason, startDate, endDate, leaveType, username }),
                headers: { 'Content-Type': "application/json" }
            })
            .then(function (res) {
                return res.json()
            }).then(function (result) {
                console.log("result", result)
                navigate("/myleave");

            })
    }
    return (
        <div>
            <UserHeader />
            <div className="login-form-box">
                <form className="login-form" onSubmit={(e) => applyLeave(e)}>
                    <div className="login-title">
                        <h4>Apply Leave</h4>
                    </div>
                    <div className="form-group mt-3">
                        <label>UserName</label>
                        <input type="text" disabled className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" value={username} />
                    </div>

                    <div className="form-group mt-3">
                        <label>Reason</label>
                        <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Reason" value={reason} onChange={(e) => onReasonChange(e)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Leave Type</label>
                        <input type="text" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Leave Type" value={leaveType} onChange={(e) => onLeaveTypeChange(e)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>Start Date</label>
                        <input type="date" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Start Date" value={startDate} onChange={(e) => onStartDateChange(e)} />
                    </div>
                    <div className="form-group mt-3">
                        <label>End Date</label>
                        <input type="date" className="form-control mt-1" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter End Date" value={endDate} onChange={(e) => onEndDateChange(e)} />
                    </div>
                    <button type="submit" className="btn btn-success mt-3">ApplyLeave</button>
                </form>
            </div>
        </div>

    )
}

export default ApplyLeave