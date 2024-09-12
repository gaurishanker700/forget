import React, { useState } from "react";
import axios from "axios";

function Forget() {
  const [email, setEmail] = useState("");
  const forgetpass = async (e) => {
    e.preventDefault();
    try {
     
      const res = await (await axios.post("http://localhost:4000/users/forget", email)).data
      console.log(res);
      console.log(email);
    } catch (error) {
      console.log("forget error", error);
    }
  };
  console.log(email);
  return (
    <>
      <h1>Reset Password</h1>
      <div className="container">
        <div className="row justify-content-center">
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <button className="btn btn-danger " onClick={forgetpass}> send </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forget;
