import React, { useState } from "react";
import "./signup.css";

export default function Signup() {

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [value,setValue] = useState([]);

  const onUpdate = (e) =>{
    const {name,value} = e.target;

    setData(pre=>({...pre,[name]:value}))
  }

  const onHandlevalue = (e) =>{
    e.preventDefault();
    console.log(data);

    setValue(pre=>([...pre,data]))
    console.log([...value,data])
  }

  return (
    <>
      <div className="main">
        <div className="card">
          <div className="box1">
            <p style={{ fontSize: "45px", fontWeight: "500", margin: "0" }}>
              Welcome Back!
            </p>
            <p style={{ textAlign: "center", width: "70%", fontSize: "23px" }}>
              To keep connected with us please login with your personal info.
            </p>
            <button>Sign in</button>
          </div>
          <div className="box2">
            <h2>SIGN UP</h2>
            <form onSubmit={onHandlevalue}>
                <input type="text" placeholder="Enter User Name" name="name" onChange={onUpdate}/>
                <input type="email" placeholder="Enter User Email" name="email" onChange={onUpdate}/>
                <input type="password" placeholder="Enter User Password" name="password" onChange={onUpdate}/>
                <button type="submit" style={{marginTop:'10px'}}>Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
