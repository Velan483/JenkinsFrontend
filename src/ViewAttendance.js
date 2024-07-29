import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./App2.css";

function ViewAttendance() {
  const [columns, setColumns] = useState([]);
  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { 
    axios
      .get("http://localhost:8084/attendance/all")
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
        .delete("http://localhost:8084/attendance/" + id)
        .then((res) => {
          alert("Data has deleted");
          navigate("/viewAttend");
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
         Attendance Management 
        </h1>

        <div className="text-end">
          <Link to="/addAttend" className="btn btn-primary">
            Add +
          </Link>

          {/* <button data-testid="add-link" className="btn btn-primary">Add +</button> */}
        </div>
        <br />
        <table className="table table-bordered  table-striped w-100 border bg-white shadow px-5 pb-5 rounded ">
          <thead>
            <tr>
               {columns.map((c, i) => (
                <th key={i}>{c}</th>
              ))} 
             
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {records.map((d, i) => (
              <tr key={i}>
                <td>{d.aid}</td>
                <td>{d.date}</td>
                <td>{d.day}</td>
                <td>{d.attend}</td>
                <td>
                  <Link
                    to={`/updatequiz/${d.aid}`}
                    className="btn btn-sm btn-success "
                  >
                    Update
                  </Link>
                  <button
                    onClick={(e) => handleSubmit(d.aid)}
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

export default ViewAttendance;
