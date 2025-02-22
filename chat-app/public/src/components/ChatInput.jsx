import React, { useState } from "react";
<<<<<<< HEAD
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import styled from "styled-components";
import Picker from "emoji-picker-react";

export default function ChatInput({ handleSendMsg }) {
  const [msg, setMsg] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const handleEmojiPickerhideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const handleEmojiClick = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };

  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMsg(msg);
      setMsg("");
=======
import styled from "styled-components";
import Picker from "emoji-picker-react";
import { IoMdSend } from "react-icons/io";
import { BsEmojiSmileFill } from "react-icons/bs";

// Chat Input
const ChatInput = ({ handleSendMsg }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [message, setMessage] = useState("");

  // Handle Emoji Picker
  const handleEmojiPickerHideShow = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  // Handle Emoji Click
  const handleEmojiClick = (e, emoji) => {
    let msg = message;
    msg += emoji.emoji;
    setMessage(msg);
  };

  // Send Chat
  const sendChat = (e) => {
    e.preventDefault();

    // Check if string is empty or contains whitespaces
    const isEmptyOrSpaces = (str) => {
      return /^\s*$/.test(str);
    };

    if (!isEmptyOrSpaces(message)) {
      handleSendMsg(message);
      setMessage("");
>>>>>>> 4dcd32c (Added new files and folders)
    }
  };

  return (
    <Container>
      <div className="button-container">
<<<<<<< HEAD
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerhideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      <form className="input-container" onSubmit={(event) => sendChat(event)}>
        <input
          type="text"
          placeholder="type your message here"
          onChange={(e) => setMsg(e.target.value)}
          value={msg}
        />
        <button type="submit">
=======
        {/* Emoji Selector */}
        <div className="emoji">
          <BsEmojiSmileFill onClick={handleEmojiPickerHideShow} />
          {showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />}
        </div>
      </div>
      {/* Form Input */}
      <form className="input-container" onSubmit={(e) => sendChat(e)}>
        <input
          type="text"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className="submit">
>>>>>>> 4dcd32c (Added new files and folders)
          <IoMdSend />
        </button>
      </form>
    </Container>
  );
<<<<<<< HEAD
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  background-color: #080420;
  padding: 0 2rem;
=======
};

// Styled Components
const Container = styled.div`
  display: grid;
  grid-template-columns: 5% 95%;
  align-items: center;
  background-color: #080220;
  padding: 0 2rem;
  padding-bottom: 0.3rem;
  border-bottom-right-radius: 2rem;

>>>>>>> 4dcd32c (Added new files and folders)
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
<<<<<<< HEAD
  .button-container {
    display: flex;
    align-items: center;
    color: white;
    gap: 1rem;
=======

  .button-container {
    display: flex;
    align-items: center;
    color: #fff;
    gap: 1rem;

>>>>>>> 4dcd32c (Added new files and folders)
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
<<<<<<< HEAD
        color: #ffff00c8;
        cursor: pointer;
      }
=======
        color: rgba(255, 255, 0, 0.784);
        cursor: pointer;
      }

>>>>>>> 4dcd32c (Added new files and folders)
      .emoji-picker-react {
        position: absolute;
        top: -350px;
        background-color: #080420;
        box-shadow: 0 5px 10px #9a86f3;
        border-color: #9a86f3;
<<<<<<< HEAD
        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;
          &-thumb {
            background-color: #9a86f3;
          }
        }
=======

        .emoji-scroll-wrapper::-webkit-scrollbar {
          background-color: #080420;
          width: 5px;

          &-thumb {
            background-color: #9186f3;
          }
        }

>>>>>>> 4dcd32c (Added new files and folders)
        .emoji-categories {
          button {
            filter: contrast(0);
          }
        }
<<<<<<< HEAD
        .emoji-search {
          background-color: transparent;
          border-color: #9a86f3;
        }
        .emoji-group:before {
          background-color: #080420;
        }
      }
    }
  }
=======

        .emoji-search {
          background-color: transparent;
          border-color: #9186f3;
        }

        .emoji-group::before {
          background-color: #080420;
        }

        input {
          color: #fff;
        }
      }
    }
  }

>>>>>>> 4dcd32c (Added new files and folders)
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
<<<<<<< HEAD
    background-color: #ffffff34;
    input {
      width: 90%;
      height: 60%;
      background-color: transparent;
      color: white;
=======
    background-color: rgba(255, 255, 255, 0.204);

    input {
      width: 90%;
      background-color: transparent;
      color: #fff;
>>>>>>> 4dcd32c (Added new files and folders)
      border: none;
      padding-left: 1rem;
      font-size: 1.2rem;

      &::selection {
        background-color: #9a86f3;
      }
<<<<<<< HEAD
=======

>>>>>>> 4dcd32c (Added new files and folders)
      &:focus {
        outline: none;
      }
    }
<<<<<<< HEAD
    button {
      padding: 0.3rem 2rem;
=======

    button {
      padding: 0.3rem 1.3rem;
>>>>>>> 4dcd32c (Added new files and folders)
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #9a86f3;
      border: none;
<<<<<<< HEAD
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
=======
      cursor: pointer;

      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;

>>>>>>> 4dcd32c (Added new files and folders)
        svg {
          font-size: 1rem;
        }
      }
<<<<<<< HEAD
      svg {
        font-size: 2rem;
        color: white;
=======

      svg {
        font-size: 2rem;
        color: #fff;
>>>>>>> 4dcd32c (Added new files and folders)
      }
    }
  }
`;
<<<<<<< HEAD
=======

export default ChatInput;
>>>>>>> 4dcd32c (Added new files and folders)
