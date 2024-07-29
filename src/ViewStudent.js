import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function View() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8084/student/all")
      .then((response) => {
        setColumns(Object.keys(response.data[0]));
        setRecords(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let handleSubmit = (id) => {
    const conf = window.confirm("Do you want to delete");
    if (conf) {
      axios
        .delete("http://localhost:8084/student/" + id)
        .then((res) => {
          alert("Data has deleted");
          navigate("/view");
          window.location.reload();
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div id="body">
      <div className="container ">
        <br />
        <h1 id="app2" className="text-center text-success ">
          Student Record Management 
        </h1>

        <div className="text-end">

          {/* <button data-testid="add-link" className="btn btn-primary"> Add + </button> */}
           <Link to="/addStud" className="btn btn-primary" >  Add +</Link>
           
          
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Section</th>
              <th>Attendance</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.sid}</td>
                <td>{d.sname}</td>
                <td>{d.dept}</td>
                <td>{d.section}</td>
                <td>{d.attend.attend}</td>

                <td>
                  <Link
                    to={`/update/${d.sid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.sid)}
                    className="btn btn-sm ms-1 btn-danger"
                    name="delete"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default View;
