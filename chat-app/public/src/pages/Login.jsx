import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

export default function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
=======
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { loginRoute } from "../utils/APIRoutes";

// Login
const Login = () => {
  const navigate = useNavigate();

  // form initial state
  const initialState = {
    email: "",
    password: "",
  };

  // Show toast error msg
  const showToast = (msg) => {
    const toastOptions = {
      position: "bottom-right",
      autoClose: 8000,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    };

    return toast.error(msg, toastOptions);
  };

  const [values, setValues] = useState(initialState);

  // Check if user is logged in
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_CHAT_APP_USER))
      return navigate("/");
  }, []); // eslint-disable-line

  // handle form Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents reload of page

    // handle Validation
    if (handleValidation()) {
      const { email, password } = values;

      const { data } = await axios.post(loginRoute, {
        email,
        password,
      });

      if (!data.status) showToast(data.msg);

      // Success
      if (data.status) {
        localStorage.setItem(
          process.env.REACT_APP_CHAT_APP_USER,
          JSON.stringify(data.user)
        );
        return navigate("/");
      }
    }
  };

  // handle form Validation
  const handleValidation = () => {
    const { email, password } = values;

    // Email validation
    const isInvalidEmail = (email) => {
      const regex = new RegExp( // eslint-disable-next-line
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      return !email || regex.test(email) === false;
    };

    if (isInvalidEmail(email) || password.length < 3 || /\s/.test(password)) {
      showToast("E-mail and Password are required.");
>>>>>>> 4dcd32c (Added new files and folders)
      return false;
    }
    return true;
  };

<<<<<<< HEAD
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
=======
  // handle form change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
>>>>>>> 4dcd32c (Added new files and folders)
  };

  return (
    <>
      <FormContainer>
<<<<<<< HEAD
        <form action="" onSubmit={(event) => handleSubmit(event)}>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h1>CHATONLINE</h1>
          </div>
          <input
            type="text"
            placeholder="Username"
            name="username"
            onChange={(e) => handleChange(e)}
            min="3"
          />
=======
        <form
          onSubmit={(e) => handleSubmit(e)}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
        >
          <div className="brand">
            <img src={Logo} alt="Snappy" />
            <h1>Snappy</h1>
          </div>

          {/* E-mail */}
          <input
            type="text"
            placeholder="E-mail"
            name="email"
            onChange={(e) => handleChange(e)}
          />

          {/* Password */}
>>>>>>> 4dcd32c (Added new files and folders)
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />
<<<<<<< HEAD
          <button type="submit">Log In</button>
          <span>
            Don't have an account ? <Link to="/register">Create One.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

=======

          <button type="submit">Login</button>
          <span>
            Don't have an account? <Link to="/register">Register</Link>
          </span>
        </form>
      </FormContainer>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

// Form Container
>>>>>>> 4dcd32c (Added new files and folders)
const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
<<<<<<< HEAD
=======

>>>>>>> 4dcd32c (Added new files and folders)
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
<<<<<<< HEAD
    img {
      height: 5rem;
    }
    h1 {
      color: white;
      text-transform: uppercase;
    }
=======
  }

  img {
    height: 5rem;
  }

  h1 {
    color: #fff;
    text-transform: uppercase;
>>>>>>> 4dcd32c (Added new files and folders)
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
<<<<<<< HEAD
    background-color: #00000076;
    border-radius: 2rem;
    padding: 5rem;
  }
  input {
    background-color: transparent;
    padding: 1rem;
    border: 0.1rem solid #4e0eff;
    border-radius: 0.4rem;
    color: white;
    width: 100%;
    font-size: 1rem;
    &:focus {
      border: 0.1rem solid #997af0;
      outline: none;
    }
  }
  button {
    background-color: #4e0eff;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-weight: bold;
    cursor: pointer;
    border-radius: 0.4rem;
    font-size: 1rem;
    text-transform: uppercase;
    &:hover {
      background-color: #4e0eff;
    }
  }
  span {
    color: white;
    text-transform: uppercase;
    a {
      color: #4e0eff;
      text-decoration: none;
      font-weight: bold;
    }
  }
`;
=======
    background-color: rgba(0, 0, 0, 0.463);
    border-radius: 2rem;
    padding: 3rem 5rem;
    input {
      background-color: transparent;
      padding: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      color: #fff;
      width: 100%;
      font-size: 1rem;

      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }

    button {
      background-color: #4e0eff;
      color: #fff;
      padding: 1rem 2rem;
      border: none;
      font-weight: bold;
      cursor: pointer;
      border-radius: 0.4rem;
      font-size: 1rem;
      text-transform: uppercase;
      transition: 0.2s ease-in-out;

      &:hover {
        background-color: #997af0;
      }
    }

    span {
      color: #fff;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;

export default Login;
>>>>>>> 4dcd32c (Added new files and folders)
