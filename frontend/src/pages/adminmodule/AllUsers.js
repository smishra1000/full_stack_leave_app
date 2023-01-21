import { useEffect, useState } from "react"
import AdminHeader from "./AdminHeader"

const AllUsers = () => {
    const [users, setUsers] = useState([])

    const getAllUsers = () => {
        fetch(`http://localhost:5000/user/allusers`)
            .then(function (res) {
                return res.json()
            }).then(function (result) {
                console.log("result", result)
                setUsers(result)

            })
    }

    useEffect(() => {
        getAllUsers();
    }, [])

   
    return (
        <div>
            <AdminHeader />
            <br/>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">First Name</th>
                        <th scope="col">LastName</th>
                        <th scope="col">email</th>
                        <th scope="col">Role</th>
                        <th scope="col">LeaveCount</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                                <td>{user.leaveCount}</td>
                        
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>

    )
}

export default AllUsers