import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function EditStudent() {
  
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8084/student/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, []);

  let handleSubmit = (e) => {
    e.preventDefault();
    let result=validateValues(data)
    if(result===true){
    axios.put("http://localhost:8084/student" , data).then((res) => {
      alert("Data Updated Successfully");
      navigate("/");
    });
  }
  };

  const validateValues = (inputData) => {
    if (inputData.sname.length === 0) {
      alert("Data Not Updated");
      return false;
    } 
    else if (inputData.dept.length === 0) {
      alert("Data Not Updated");
      return false;
    }else if (inputData.section.length === 0) {
      alert("Data Not Updated");
      return false;
    }else {
      return true;
    }
  };

  return (
    <div>
      <div
        id="edit2"
        className="d-flex w-100 vh-100 justify-content-center align-items-center "
      >
        <div className="w-50 border bg-light p-5">
          <form onSubmit={handleSubmit}>
            <h1>UPDATE STUDENT DATA</h1>
            <br/>
            <div>
              <lable htmlFor="sid" role="idlable">Student ID :</lable><br/><br/>
              <input
                type="text"
                disabled
                name="sid"
                role="id"
                className="form-control"
                value={data.sid}
                //onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="sname" role="namelable">Name :</lable><br/><br/>
              <input
                type="text"
                name="sname"
                className="form-control"
                role="name"
                value={data.sname}
                onChange={(e) => setData({ ...data, sname: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="dept" role="deplable">Department :</lable><br/><br/>
              <input
                type="text"
                name="dept"
                className="form-control"
                role="dep"
                value={data.dept}
                onChange={(e) => setData({ ...data, dept: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="section" role="seclable">Section :</lable><br/><br/>
              <input
                type="text"
                name="section"
                className="form-control"
                role="sec"
                value={data.section}
                onChange={(e) => setData({ ...data, section: e.target.value })}
              />
            </div>
            <br />

            <button className="btn btn-info " name="submit" data-testid="update">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditStudent;
