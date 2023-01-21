import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom"
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserDashboard from './pages/usermodule/UserDashboard';
import ProtectedRoutes from './pages/ProtectedRoutes';
import MyLeave from './pages/usermodule/MyLeave';
import ApplyLeave from "./pages/usermodule/ApplyLeave"
import AdminDashboard from "./pages/adminmodule/AdminDashboard"
import AllLeave from './pages/adminmodule/AllLeave';
import AllUsers from './pages/adminmodule/AllUsers';
import Balance from './pages/usermodule/Balance';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       {/* public page */}
       <Route path="/" element={<ProtectedRoutes path="/login">
            <UserDashboard/>
          </ProtectedRoutes>}>
        </Route>
        <Route path="/signup" element={<Signup/>}></Route>

        {/* // private page */}
        <Route path="/userdashboard" element={<ProtectedRoutes path="/">
            <UserDashboard/>
          </ProtectedRoutes>}>
        </Route>
        <Route path="/applyleave" element={<ProtectedRoutes path="/">
            <ApplyLeave/>
          </ProtectedRoutes>}>
        </Route>
        <Route path="/myleave" element={<ProtectedRoutes path="/">
            <MyLeave/>
          </ProtectedRoutes>}>
        </Route>
        <Route path="/balance" element={<ProtectedRoutes path="/">
            <Balance/>
          </ProtectedRoutes>}>
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/admindashboard" element={<AdminDashboard/>}></Route>
        <Route path="/allleave" element={<AllLeave/>}></Route>
        <Route path="/allusers" element={<AllUsers/>}></Route>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;