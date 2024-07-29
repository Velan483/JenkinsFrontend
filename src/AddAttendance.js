import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App2.css";

function AddAttendance() {
  const [inputData, setInputData] = useState({
    aid:"",
    date: "",
    day: "",
    attend: "",
  });

  const naviget = useNavigate();

  let handleSubmit = (e) => {
    e.preventDefault();
    let result=validateValues(inputData)
    if(result===true){
      axios
        .post("http://localhost:8084/attendance", inputData)
        .then((res) => {
          if(inputData!=null){
          alert("Data added Successfully");}
          else{
            alert("Data Not added"); 
          }
          naviget("/viewAttend");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      }
  };

  const validateValues = (inputData) => {
   

    if (inputData.date.length === 0) {
      alert("Data Not Added");
      return false;
    } 
    else if (inputData.day.length === 0) {
      alert("Data Not Added");
      return false;
    }else if (inputData.attend.length === 0) {
      alert("Data Not Added");
      return false;
    }else {
      return true;
    }
  };

  return (
    <div
      id="add2"
      className="d-flex w-100 vh-100 justify-content-center align-items-center "
    >
      <div className="w-50 border bg-light p-5">
        <form onSubmit={handleSubmit}>
          <h1>ADD ATTENDANCE DATA</h1><br/>
          <div>
            <lable htmlFor="title" role="datelable">Date :</lable><br/>
            <input
              type="date"
              name="date"
              role="date"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, date: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="day" role="daylable">Day :</lable><br/>
            <input
              type="text"
              name="day"
              className="form-control"
              role="day"
              onChange={(e) =>
                setInputData({ ...inputData, day: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="attend" role="attendlable">Attendance :</lable><br/>
            <input
              type="text"
              name="attend"
              role="attend"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, attend: e.target.value })
              }
            />
          </div>
          <br />
          <button className="btn btn-info " name ="submit" data-testid="addattend-submit">Submit</button>
        </form>

      </div>
    </div>
  );
}

export default AddAttendance;
