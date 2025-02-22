import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Logo from "../assets/logo.svg";
<<<<<<< HEAD

export default function Contacts({ contacts, changeChat }) {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  useEffect(async () => {
    const data = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    );
    setCurrentUserName(data.username);
    setCurrentUserImage(data.avatarImage);
  }, []);
=======
import DefaultAvatar from "../assets/user-default.png";

// Contacts
const Contacts = ({ contacts, currentUser, changeChat }) => {
  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentUserImage, setCurrentUserImage] = useState(undefined);
  const [currentSelected, setCurrentSelected] = useState(undefined);
  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState([]);

  // Check if string is empty or contains whitespaces
  const isEmptyOrSpaces = (str) => {
    return /^\s*$/.test(str);
  };

  // Check current user
  useEffect(() => {
    if (currentUser) {
      setCurrentUserImage(currentUser.avatarImage);
      setCurrentUserName(currentUser.username);
    }
  }, [currentUser]);

  // Search Contacts Logic
  useEffect(() => {
    const re = RegExp(
      `.*${search.toLowerCase().replace(/\s+/g, "").split("").join(".*")}.*`
    );
    const searchResults = contacts.filter((v) =>
      v.username.toLowerCase().match(re)
    );

    setFilteredContacts(searchResults);
  }, [contacts, search]);
  // Change Current Chat
>>>>>>> 4dcd32c (Added new files and folders)
  const changeCurrentChat = (index, contact) => {
    setCurrentSelected(index);
    changeChat(contact);
  };
<<<<<<< HEAD
  return (
    <>
      {currentUserImage && currentUserImage && (
        <Container>
          <div className="brand">
            <img src={Logo} alt="logo" />
            <h3>CHATONLINE</h3>
          </div>
          <div className="contacts">
            {contacts.map((contact, index) => {
              return (
                <div
                  key={contact._id}
                  className={`contact ${
                    index === currentSelected ? "selected" : ""
                  }`}
                  onClick={() => changeCurrentChat(index, contact)}
                >
                  <div className="avatar">
                    <img
                      src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                      alt=""
                    />
                  </div>
                  <div className="username">
                    <h3>{contact.username}</h3>
                  </div>
                </div>
              );
            })}
          </div>
=======

  // Show each contacts
  const showContacts = (contact, key) => {
    return (
      <div
        className={`contact ${key === currentSelected ? "selected" : ""}`}
        key={key}
        onClick={() => changeCurrentChat(key, contact)}
      >
        {/* Avatar Image */}
        <div className="avatar">
          <img
            src={`${
              contact?.isAvatarImageSet
                ? `data:image/svg+xml;base64,${contact?.avatarImage}`
                : DefaultAvatar
            }`}
            alt={`Avatar ${key + 1}`}
          />
        </div>

        {/* Avatar Username */}
        <div className="username">
          <h3>{contact.username}</h3>
        </div>
      </div>
    );
  };

  return (
    <>
      {currentUserImage && currentUserName && (
        <Container>
          {/* Brand Logo and Name */}
          <div className="brand">
            <img src={Logo} alt="Snappy" />
            <h3>Snappy</h3>
          </div>
          <div className="contacts">
            {/* Contacts Search */}
            <div className="contacts-search">
              <input
                type="text"
                placeholder="Search Contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            {/* Show Searched Contacts */}
            {isEmptyOrSpaces(search) ? (
              contacts.map((contact, i) => showContacts(contact, i))
            ) : filteredContacts.length > 0 ? (
              filteredContacts.map((contact, i) => showContacts(contact, i))
            ) : (
              <p>No Contacts Found.</p>
            )}
          </div>

          {/* Current User Info */}
>>>>>>> 4dcd32c (Added new files and folders)
          <div className="current-user">
            <div className="avatar">
              <img
                src={`data:image/svg+xml;base64,${currentUserImage}`}
<<<<<<< HEAD
                alt="avatar"
              />
            </div>
=======
                alt={`${currentUserName}'s Avatar`}
              />
            </div>

>>>>>>> 4dcd32c (Added new files and folders)
            <div className="username">
              <h2>{currentUserName}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
<<<<<<< HEAD
}
=======
};

// Styled Components
>>>>>>> 4dcd32c (Added new files and folders)
const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
<<<<<<< HEAD
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 2rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
=======
  border-top-left-radius: 2rem;
  border-bottom-left-radius: 2rem;

  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    cursor: default;

    img {
      height: 2rem;
    }

    h3 {
      color: #fff;
      text-transform: uppercase;
    }
  }

>>>>>>> 4dcd32c (Added new files and folders)
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.8rem;
<<<<<<< HEAD
=======

>>>>>>> 4dcd32c (Added new files and folders)
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
<<<<<<< HEAD
    .contact {
      background-color: #ffffff34;
      min-height: 5rem;
      cursor: pointer;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.4rem;
      display: flex;
      gap: 1rem;
      align-items: center;
      transition: 0.5s ease-in-out;
=======

    p {
      color: #fff;
    }

    .contacts-search {
      width: 90%;
      height: 2.5rem;
      border-radius: 2rem;
      display: flex;
      align-items: center;
      gap: 2rem;
      background-color: rgba(255, 255, 255, 0.204);

      input {
        background-color: transparent;
        color: #fff;
        border: none;
        padding-left: 1rem;
        font-size: 1.2rem;

        &::selection {
          background-color: #9a86f3;
        }

        &:focus {
          outline: none;
        }
      }
    }

    .contact {
      background-color: rgba(255, 255, 255, 0.224);
      min-height: 5rem;
      width: 90%;
      cursor: pointer;
      border-radius: 0.2rem;
      padding: 0.4rem;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;

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
        }
      }
    }
    .selected {
      background-color: #9a86f3;
=======

      .username {
        h3 {
          color: #fff;
        }
      }
    }

    .selected {
      background-color: #9186f3;
>>>>>>> 4dcd32c (Added new files and folders)
    }
  }

  .current-user {
    background-color: #0d0d30;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
<<<<<<< HEAD
=======
    cursor: default;

>>>>>>> 4dcd32c (Added new files and folders)
    .avatar {
      img {
        height: 4rem;
        max-inline-size: 100%;
      }
    }
<<<<<<< HEAD
    .username {
      h2 {
        color: white;
      }
    }
=======

    .username {
      h2 {
        color: #fff;
      }
    }

>>>>>>> 4dcd32c (Added new files and folders)
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      gap: 0.5rem;
      .username {
        h2 {
          font-size: 1rem;
        }
      }
    }
  }
`;
<<<<<<< HEAD
=======

export default Contacts;
>>>>>>> 4dcd32c (Added new files and folders)
