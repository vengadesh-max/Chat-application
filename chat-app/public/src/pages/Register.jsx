import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import axios from "axios";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

export default function Register() {
  const navigate = useNavigate();
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };
  const [values, setValues] = useState({
=======
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from "../utils/APIRoutes";

// Register
const Register = () => {
  const navigate = useNavigate();

  // form initial state
  const initialState = {
>>>>>>> 4dcd32c (Added new files and folders)
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
<<<<<<< HEAD
  });

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
=======
  };

  // Show toast error message
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

  // Check if user is already logged in
  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_CHAT_APP_USER))
      return navigate("/");
  }, []); // eslint-disable-line

  // handle form Submit
  const handleSubmit = async (e) => {
    e.preventDefault(); // prevents reload of page
    if (handleValidation()) {
      const { username, email, password } = values;

>>>>>>> 4dcd32c (Added new files and folders)
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });

<<<<<<< HEAD
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
=======
      if (!data.status) showToast(data.msg);

      // Registration success
      if (data.status) {
        localStorage.setItem(
          process.env.REACT_APP_CHAT_APP_USER,
>>>>>>> 4dcd32c (Added new files and folders)
          JSON.stringify(data.user)
        );
        navigate("/");
      }
    }
  };

<<<<<<< HEAD
  return (
    <>
      <FormContainer>
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
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={(e) => handleChange(e)}
          />
=======
  // handle validation
  const handleValidation = () => {
    const { username, email, password, confirmPassword } = values;

    // Check if string is empty or contains whitespaces
    const isEmptyOrSpaces = (str) => {
      return /^\s*$/.test(str);
    };

    // email validation
    const isInvalidEmail = (email) => {
      const regex = new RegExp( // eslint-disable-next-line
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      );
      return !email || regex.test(email) === false;
    };

    // vaidate username
    if (isEmptyOrSpaces(username)) {
      showToast("Username should be greater than 3 characters.");
      return false;
    }

    // validate email
    if (isInvalidEmail(email)) {
      showToast("Invalid Email.");
      return false;
    }

    // validate password
    if (/\s/.test(password)) {
      showToast("Password should not contain spaces.");
      return false;
    }

    if (password.length < 8) {
      showToast("Password should be equal or greater than 8 characters.");
      return false;
    }

    // validate confirm password
    if (password !== confirmPassword) {
      showToast("Password and confirm password should be same.");
      return false;
    }

    return true;
  };

  // handle form change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <FormContainer>
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
          {/* Your Name */}
          <input
            type="text"
            placeholder="Your Name"
            name="username"
            onChange={(e) => handleChange(e)}
          />

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
=======

          {/* Confirm Password */}
>>>>>>> 4dcd32c (Added new files and folders)
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={(e) => handleChange(e)}
          />
<<<<<<< HEAD
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login.</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer />
    </>
  );
}

=======
          <button type="submit">Register</button>
          <span>
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>

      <ToastContainer />
    </>
  );
};

// Styled Components
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
    padding: 3rem 5rem;
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

export default Register;
>>>>>>> 4dcd32c (Added new files and folders)
