import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"

const AllLeave = () => {
    const [leaves, setLeaves] = useState([])
    const [username, setUserName] = useState("")

    useEffect(() => {
        // let loggedInUser = localStorage.getItem("loggedInUser");
        // loggedInUser = loggedInUser ? JSON.parse(loggedInUser) : null;
        // setUserName(loggedInUser.email)
    }, [])

    const getAllLeave = () => {
        fetch(`http://localhost:5000/userleave/allleave`)
            .then(function (res) {
                return res.json()
            }).then(function (result) {
                console.log("result", result)
                setLeaves(result)

            })
    }

    useEffect(() => {
        getAllLeave();
    }, [])

    const approveRejectLeave = (e, leave, status) => {
        e.preventDefault();
        fetch(`http://localhost:5000/userleave/${leave._id}/approvereject`,
            {
                method: "PUT", body: JSON.stringify({ status: status }),
                headers: { 'Content-Type': "application/json" }
            })
            .then(function (res) {
                return res.json()
            }).then(function (result) {
                getAllLeave()

            })
    }
    return (
        <div>
            <AdminHeader />
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Leave Type</th>
                        <th scope="col">Reason</th>
                        <th scope="col">Status</th>
                        <th scope="col">Start Date</th>
                        <th scope="col">End Date</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {leaves.map((leave) => {
                        return (
                            <tr>
                                <td>{leave.username}</td>
                                <td>{leave.leaveType}</td>
                                <td>{leave.reason}</td>
                                <td>{leave.status}</td>
                                <td>{leave.startDate}</td>
                                <td>{leave.endDate}</td>
                                {leave.status !== "approved" && <td><button type="button" class="btn btn-primary" onClick={(e) => approveRejectLeave(e, leave, "approved")}>Approve</button>
                                    <button type="button" class="btn btn-danger" onClick={(e) => approveRejectLeave(e, leave, "rejected")}>Reject</button></td>}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default AllLeave