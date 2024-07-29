import React from "react";
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import AddStudent from "./AddStudent";
import AddAttendance from "./AddAttendance"
import View from "./ViewStudent";
import ViewAttendance from "./ViewAttendance";
import EditStudent from "./EditStudent";
import EditAttendance from "./EditAttendance";
import FindStudent from "./FindStudent";
import FindAttendance from "./FindAttendance";
import Login from "./Login";
import Register from "./Register";


function AppRouter() {
  return (
    
    <Router class="header">
      <header>
        <nav>
          <ul>
          <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/addStud" id="addstud">Add Student</Link>
            </li>
            <li>
              <Link to="/addAttend" id="addatt">Add Attendance</Link>
            </li>
            <li>
              <Link to="/view">View Student</Link>
            </li>
            <li>
              <Link to="/viewAttend">View Attendance</Link>
            </li>
            <li style={{marginLeft:"200px"}}>
                <Link to="/findStud"><button class="btn btn-outline-light"  type="submit"><i class='bx bx-search'></i>Student</button></Link>
            </li>
            <li style={{marginLeft:"30px"}}>
                <Link to="/findAttend"><button class="btn btn-outline-light"  type="submit"><i class='bx bx-search'></i>Attendance</button></Link>
            </li>
          </ul>
        </nav>
        </header><br/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/addStud" element={<AddStudent />} />
        <Route path="/addAttend" element={<AddAttendance />} />
        <Route path="/view" element={<View />} />
        <Route path="/viewAttend" element={<ViewAttendance/>} />
        <Route path="/update/:id" element={<EditStudent/>} />
        <Route path="/updatequiz/:id" element={<EditAttendance/>} />
        <Route path="/findStud" element={<FindStudent/>} />
        <Route path="/findAttend" element={<FindAttendance/>} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
