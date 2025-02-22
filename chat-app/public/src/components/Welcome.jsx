<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <img src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

=======
import React from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

// Welcome
const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Robot} alt="Welcome" />
      <h1>
        Welcome, <span>{currentUser?.username}!</span>
      </h1>
      <h3>Please select a chat to start messaging.</h3>
    </Container>
  );
};

// Styled Components
>>>>>>> 4dcd32c (Added new files and folders)
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
<<<<<<< HEAD
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
=======
  flex-direction: column;
  color: #fff;

  img {
    height: 20rem;
  }

>>>>>>> 4dcd32c (Added new files and folders)
  span {
    color: #4e0eff;
  }
`;
<<<<<<< HEAD
=======

export default Welcome;
>>>>>>> 4dcd32c (Added new files and folders)
