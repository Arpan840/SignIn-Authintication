import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  let navigate = useNavigate();
  const [input, setInput] = useState({ username: "", password: "" });
  const handelChange = (event) => {
    setInput((preValue) => {
      return {
        ...preValue,
        [event.target.name]: event.target.value,
      };
    });
  };
  async function handelSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(input),
      });
      if (response.ok) {
        const token = await response.text();
        localStorage.setItem("token", `${token}`);
        toast.success("success", response.statusText);

        navigate("/profile");
      } else {
        let errorMessage = await response.text();
        let parsedMessage = JSON.parse(errorMessage);

        toast.error(parsedMessage.message);
        localStorage.clear("token");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="d-flex align-items-center" style={{ height: "100vh" }}>
      <form className="w-50 m-auto" onSubmit={handelSubmit}>
        <h5>Welcome back! 👋</h5>
        <h1>Sign in to your account</h1>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="username"
            value={input.username}
            onChange={handelChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handelChange}
            value={input.password}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100 p-3">
          Continue
        </button>
        <div className="text-center text-primary mt-2">
          Forget your password?
        </div>
      </form>
    </div>
  );
};

export default Signin;
