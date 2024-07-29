import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./App2.css";

function EditAttendance() {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("http://localhost:8084/attendance/" + id)
      .then((response) => setData(response.data))
      .catch((err) => console.log(err));
  }, );

  let handleSubmit = (e) => {
    e.preventDefault();
    let result=validateValues(data)
    if(result===true){
    axios.put("http://localhost:8084/attendance" , data).then((res) => {
      alert("Data Updated Successfully");
      navigate("/");
    });
  }
  };


  const validateValues = (inputData) => {
   

    if (inputData.date.length === 0) {
      alert("Data Not Updated");
      return false;
    } 
    else if (inputData.day.length === 0) {
      alert("Data Not Updated");
      return false;
    }else if (inputData.attend.length === 0) {
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
            <h1>UPDATE ATTENDANCE DATA</h1>
            <br/>
            <div>
              <lable htmlFor="aid" role="aidlable">Attendance ID :</lable><br/>
              <input
                type="number"
                disabled
                name="aid"
                role="aid"
                className="form-control"
                value={data.aid}
                //onChange={(e) => setData({ ...data, Name: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="date" role="adatelable">date :</lable><br/>
              <input
                type="text"
                name="date"
                className="form-control"
                role="adate"
                value={data.date}
                onChange={(e) => setData({ ...data, date: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="day" role="adaylable">Day :</lable><br/>
              <input
                type="text"
                name="day"
                className="form-control"
                role="aday"
                value={data.day}
                onChange={(e) => setData({ ...data, day: e.target.value })}
              />
            </div>
            <br/>
            <div>
              <lable htmlFor="attend" role="alable">Attendance :</lable><br/>
              <input
                type="text"
                name="attend"
                className="form-control"
                role="attend"
                value={data.attend}
                onChange={(e) => setData({ ...data, attend: e.target.value })}
              />
            </div>
            <br />
            <button className="btn btn-info " name="submit" data-testid="update-att">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditAttendance;
