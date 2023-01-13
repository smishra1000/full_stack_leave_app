import { Navigate } from "react-router-dom"

const ProtectedRoutes = ({path,children})=>{
    let loggedInUser = localStorage.getItem("loggedInUser");
    loggedInUser = loggedInUser ? JSON.parse(loggedInUser) : null;
        if(loggedInUser && loggedInUser.email){
            return children
        }else {
            return <Navigate to={path} replace={true}/>
        }
}        
export default ProtectedRoutes