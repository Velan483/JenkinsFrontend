import React, { useState } from "react";
import axios from "axios";
import "./App2.css";


function FindAttendance() {
    const [id, setId] = useState(""); // Initialize id state
    const [data, setData] = useState([]);

    const handleSearch = () => {
        axios
            .get("http://localhost:8084/attendance/" + id)
            .then((response) => setData(response.data))
            .catch((err) => console.log(err));
    };

    return (
        <div id="body">
            <div className="container">
                 <br/><br/><br/>
                
                    <input
                        type="text"
                        id="search"
                        style={{ height: "38px", paddingBottom: "8px" }}
                        onChange={(e) => setId(e.target.value)} // Update id state on input change
                    ></input>
                    <button className="btn btn-primary" onClick={handleSearch}>
                        Search
                    </button>
                  <br/><br/>

                <table className="table table-bordered table-striped w-100 border bg-white shadow px-5 pb-5 rounded">
                    <thead>
                        <tr>
                            <th>Attendance Id</th>
                            <th>Date</th>
                            <th>Day</th>
                            <th>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{data.aid}</td>
                            <td>{data.date}</td>
                            <td>{data.day}</td>
                            <td>{data.attend}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default FindAttendance;
