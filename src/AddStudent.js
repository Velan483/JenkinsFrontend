import React from "react";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./App2.css";
 
function AddStudent() {
  const [records, setRecords] = useState([]);
  const [inputData, setInputData] = useState({
    sid:"-1",
    sname: "",
    dept: "",
    section:"",
    attend:
    {
    aid:"",
    date: "",
    day: "",
    attend: "",
  }
});
 
useEffect(() => {
    loadData();
  }, []);
 
  const loadData = async () => {
    await axios.get("http://localhost:8084/attendance/idlist")
      .then((res) => {
        console.log(res.data);
        setRecords(res.data);
        return res.data;
      })
      .catch((err) => console.error(err));
  };
 
  let handleChange = (e) => {
    if (e.target.name === "aid") {
        console.log(e.target.value);
        setInputData({ ...inputData, attend: { aid: e.target.value } });
        axios.get("http://localhost:8084/attendance/"+e.target.value)
        .then((res)=>{
            console.log(res.data);
            setInputData({ ...inputData, attend: res.data });
            return res.data;
        })
        .catch((err) => console.error(err));
    };
  }
 
  const naviget = useNavigate();
 
  let handleSubmit = (e) => {
    e.preventDefault();
    let result=validateValues(inputData)
    if(result===true){
      axios
        .post("http://localhost:8084/student", inputData)
        .then((res) => {
          console.log(inputData);
          alert("Data added Successfully");
          naviget("/view");
          console.log(res.data);
        })
        .catch((err) => console.log(err));
      }
  };
 

  const validateValues = (inputData) => {
   

    if (inputData.sname.length === 0) {
      alert("Data Not Added");
      return false;
    } 
    else if (inputData.dept.length === 0) {
      alert("Data Not Added");
      return false;
    }else if (inputData.section.length === 0) {
      alert("Data Not Added");
      return false;
    // } else if (inputData.aid.length === 0) {
    //   alert("Data Not Added");
    //   return false;
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
          <h1>ADD STUDENT DATA</h1>
          <br/>
          <div>
            <lable htmlFor="sname" role="namelable">Name :</lable>
            <input
              type="text"
              name="sname"
              role="name"
              className="form-control"
              onChange={(e) =>
                setInputData({ ...inputData, sname: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="dept" role="deplable">Department :</lable>
            <input
              type="text"
              name="dept"
              className="form-control"
              role="dep"
              onChange={(e) =>
                setInputData({ ...inputData, dept: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
            <lable htmlFor="section" role="seclable">Section :</lable>
            <input
              type="text"
              name="section"
              className="form-control"
              role="sec"
              onChange={(e) =>
                setInputData({ ...inputData, section: e.target.value })
              }
            />
          </div>
          <br/>
          <div>
          <label htmlFor="aid"  role="attlable">Attendance ID :</label>  
                  <select
                    class="form-select"
                    required="required"
                    name="aid"
                    title="Select ID "
                    onChange={handleChange}
                  >
                    <option name="aid" selected="selected">
                      Select One
                    </option>
                    {records.map((items) => (
                      <option value={items} key={items}>
                        {items}
                      </option>
                    ))}
                  </select>
            </div>
 
          <br />
 
          <button className="btn btn-info " name="submit" data-testid="add-submit">Submit</button>
        </form>
 
       
      </div>
    </div>
  );
}
 
export default AddStudent;