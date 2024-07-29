import React, { useState } from "react";
import axios from "axios";
import "./App2.css";

function FindStudent() {
  const [id, setId] = useState(""); // Initialize id state
  const [data, setData] = useState([]);

  const handleSearch = () => {
    axios
      .get("http://localhost:8084/student/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div id="body">
      <div className="container">
        <br />
        <br />
        <br />

        <input
          type="number"
          id="search"
          style={{ height: "38px", paddingBottom: "8px" }}
          onChange={(e) => setId(e.target.value)} // Update id state on input change
        />
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
        <br />
        <br />

        <table className="table table-bordered table-striped w-100 border bg-white shadow px-5 pb-5 rounded">
          <thead>
            <tr>
              <th>Student Id</th>
              <th>Name</th>
              <th>Department</th>
              <th>Section</th>
              <th>Attendance</th>
            </tr>
          </thead>
          <tbody>
            {data.attend ? (
              <tr>
                <td>{data.sid}</td>
                <td>{data.sname}</td>
                <td>{data.dept}</td>
                <td>{data.section}</td>
                <td>{data.attend.attend}</td>
              </tr>
            ) : (
              <tr>
                <td colSpan="5">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FindStudent;
