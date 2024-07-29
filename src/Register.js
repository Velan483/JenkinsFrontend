import React from 'react'
import "./login.css";
import { useState } from "react";

function Register() {
    
    const [inputData, setInputData] = useState({
        Name:"",
        Email:"",
        Password:"",
        ConfrimPassword:"",
        MobileNumber:"",
        City:"",
      });
      
    
      let handleSubmit = (e) => {
        e.preventDefault();
        let result=validateValues(inputData);
        if(result===true){
          alert("Register Successfully");
        }

      };
    
      const validateValues = (inputData) => {
    
        if (inputData.Name.length === 0) {
          alert("Please enter the Name !!! ");
          return false;
        }else if (inputData.Email.length === 0) {
          alert("Please enter the Email!!!");
            return false;
        }else if (inputData.Password.length === 0) {
          alert("Please enter the Password!!!");
          return false;
        }
        else if (inputData.ConfrimPassword.length === 0) {
            alert("Please enter the Confrim Password!!!");
            return false;
        }else if (inputData.MobileNumber.length === 0) {
            alert("Please enter the Mobile Number!!!");
            return false;
        }else if (inputData.City.length === 0) {
            alert("Please enter the city!!!");
            return false;
        }else {
          return true;
        }
      };
    
      return (
        <div>
        <section id='login'>
          <form onSubmit={handleSubmit}>
            <div class="container">
                <h1>Register</h1>
                <div>
                 <input
                  type="text"
                  name='Name'
                  placeholder="Name"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData, Name: e.target.value })
                  }
                 /> 
                </div>

              <div>
                 <input
                  type="email"
                  name='Email'
                  placeholder="Email"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData, Email: e.target.value })
                  }
                 />  
              </div>

              <div>
                 <input
                  type="password"
                  name='Password'
                  placeholder="Password"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData, Password: e.target.value })
                  }
                />
              </div>

              <div>
                 <input
                  type="password"
                  name='ConfrimPassword'
                  placeholder="Confrim Password"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData, ConfrimPassword: e.target.value })
                  }
                />
              </div>

              <div>
                 <input
                  type="text"
                  name="MobileNumber"
                  placeholder="Mobile Number"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData,  MobileNumber: e.target.value })
                  }
                />
              </div>

              <div>
                 <input
                  type="text"
                  name="City"
                  placeholder="City"
                  className="login"
                  onChange={(e) =>
                    setInputData({ ...inputData,  City: e.target.value })
                  }
                />
              </div>

              <div>
                <button
                type='submit'
                name="submit"
                Value="Register"
                className='login btn btn-danger'

                >Register</button>
              </div>

              <div>
                <p>Already have account?&nbsp;&nbsp;
                   <a href='#'>Login</a>
                </p>

              </div>
            </div>
          </form>
        </section>
        </div>
      )
}

export default Register
