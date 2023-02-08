import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
} from 'reactstrap';
import {Link, useNavigate} from "react-router-dom"
function AdminHeader(){
    const navigate = useNavigate();
    const logout=()=>{
        localStorage.clear();
        navigate("/login")
    }
    return(
        <Navbar style={{"background":"cadetblue"}}>
                <NavbarBrand href="/">LeaveApp</NavbarBrand>
                    <Nav className="me-auto">
                        <NavItem>
                            <Link to="/allleave">All Request</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/allusers">All Users</Link>
                        </NavItem>
                    </Nav>
                    <NavbarText onClick={logout}>Logout</NavbarText>

            </Navbar>
    )
}

export default AdminHeader