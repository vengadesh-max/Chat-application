import React, { useState, useEffect, useRef } from "react";
<<<<<<< HEAD
import styled from "styled-components";
import ChatInput from "./ChatInput";
import Logout from "./Logout";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { sendMessageRoute, recieveMessageRoute } from "../utils/APIRoutes";

export default function ChatContainer({ currentChat, socket }) {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    const response = await axios.post(recieveMessageRoute, {
      from: data._id,
      to: currentChat._id,
    });
    setMessages(response.data);
  }, [currentChat]);

  useEffect(() => {
    const getCurrentChat = async () => {
      if (currentChat) {
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )._id;
      }
    };
    getCurrentChat();
  }, [currentChat]);

  const handleSendMsg = async (msg) => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: data._id,
      msg,
    });
    await axios.post(sendMessageRoute, {
      from: data._id,
      to: currentChat._id,
=======
import axios from "axios";
import styled from "styled-components";
import Logout from "./Logout";
import DefaultAvatar from "../assets/user-default.png";
import ChatInput from "./ChatInput";
import Messages from "./Messages";
import { getAllMessagesRoute, sendMessageRoute } from "../utils/APIRoutes";

// Chat Container
const ChatContainer = ({ currentChat, currentUser, socket }) => {
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(undefined);
  const scrollRef = useRef();

  // fetch all messages
  useEffect(() => {
    const fetchAllMessages = async () => {
      const response = await axios.post(getAllMessagesRoute, {
        from: currentUser?._id,
        to: currentChat?._id,
      });

      setMessages(response?.data);
    };

    fetchAllMessages();
  }, [currentChat]); // eslint-disable-line

  // socket.io message recieve
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []); // eslint-disable-line

  // check message from server using socket.io
  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  // change scroll to latest message
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behaviour: "smooth" });
  }, [messages]);

  // Handle Send Messages
  const handleSendMsg = async (msg) => {
    await axios.post(sendMessageRoute, {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });

    // socket.io send msg
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
>>>>>>> 4dcd32c (Added new files and folders)
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };

<<<<<<< HEAD
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

=======
>>>>>>> 4dcd32c (Added new files and folders)
  return (
    <Container>
      <div className="chat-header">
        <div className="user-details">
<<<<<<< HEAD
          <div className="avatar">
            <img
              src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
              alt=""
            />
          </div>
          <div className="username">
            <h3>{currentChat.username}</h3>
          </div>
        </div>
        <Logout />
      </div>
      <div className="chat-messages">
        {messages.map((message) => {
          return (
            <div ref={scrollRef} key={uuidv4()}>
              <div
                className={`message ${
                  message.fromSelf ? "sended" : "recieved"
                }`}
              >
                <div className="content ">
                  <p>{message.message}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 80% 10%;
  gap: 0.1rem;
  overflow: hidden;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }
=======
          {/* User Avatar */}
          <div className="avatar">
            <img
              src={`${
                currentChat?.isAvatarImageSet
                  ? `data:image/svg+xml;base64,${currentChat?.avatarImage}`
                  : DefaultAvatar
              }`}
              alt={`${currentChat?.username}'s Avatar`}
            />
          </div>
          {/* Avatar Username */}
          <div className="username">
            <h3>{currentChat?.username}</h3>
          </div>
        </div>
        {/* Logout */}
        <Logout />
      </div>
      {/* Messages */}
      <Messages messages={messages} scrollRef={scrollRef} />
      <ChatInput handleSendMsg={handleSendMsg} />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  padding-top: 1rem;
  display: grid;
  grid-template-rows: 10% 78% 12%;
  gap: 0.1rem;
  overflow: hidden;

  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-rows: 15% 70% 15%;
  }

>>>>>>> 4dcd32c (Added new files and folders)
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
<<<<<<< HEAD
=======

>>>>>>> 4dcd32c (Added new files and folders)
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
<<<<<<< HEAD
=======
      cursor: default;

>>>>>>> 4dcd32c (Added new files and folders)
      .avatar {
        img {
          height: 3rem;
        }
      }
<<<<<<< HEAD
      .username {
        h3 {
          color: white;
=======

      .username {
        h3 {
          color: #fff;
>>>>>>> 4dcd32c (Added new files and folders)
        }
      }
    }
  }
<<<<<<< HEAD
  .chat-messages {
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .message {
      display: flex;
      align-items: center;
      .content {
        max-width: 40%;
        overflow-wrap: break-word;
        padding: 1rem;
        font-size: 1.1rem;
        border-radius: 1rem;
        color: #d1d1d1;
        @media screen and (min-width: 720px) and (max-width: 1080px) {
          max-width: 70%;
        }
      }
    }
    .sended {
      justify-content: flex-end;
      .content {
        background-color: #4f04ff21;
      }
    }
    .recieved {
      justify-content: flex-start;
      .content {
        background-color: #9900ff20;
      }
    }
  }
`;
=======
`;

export default ChatContainer;
>>>>>>> 4dcd32c (Added new files and folders)
