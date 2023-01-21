import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavbarText,
} from 'reactstrap';
import {Link} from "react-router-dom"
function AdminHeader(){
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
                    <NavbarText>Logout</NavbarText>

            </Navbar>
    )
}

export default AdminHeader