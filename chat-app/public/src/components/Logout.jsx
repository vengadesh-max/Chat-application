import React from "react";
import { useNavigate } from "react-router-dom";
<<<<<<< HEAD
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";
import { logoutRoute } from "../utils/APIRoutes";
export default function Logout() {
  const navigate = useNavigate();
  const handleClick = async () => {
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };
  return (
    <Button onClick={handleClick}>
      <BiPowerOff />
    </Button>
  );
}

=======
import styled from "styled-components";
import { BiPowerOff } from "react-icons/bi";

// Logout
const Logout = () => {
  const navigate = useNavigate();
  const handleClick = async () => {
    localStorage.clear(); //clear local storage
    navigate("/login"); // redirect to login
  };

  return (
    <Button onClick={handleClick} title="Logout">
      <BiPowerOff />
    </Button>
  );
};

// Styled Components
>>>>>>> 4dcd32c (Added new files and folders)
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #9a86f3;
  border: none;
  cursor: pointer;
<<<<<<< HEAD
=======

>>>>>>> 4dcd32c (Added new files and folders)
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
<<<<<<< HEAD
=======

export default Logout;
>>>>>>> 4dcd32c (Added new files and folders)
