import React, { useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container showPassword={showPassword}>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="body flex column a-center j-center">
          <div className="text flex column">
            <h1>Unlimited Movies, TV shows and more</h1>
            <h4>Watch anywhere. Cancel Anytime</h4>
            <h6>
              Ready to watch? Enter your email and create or restart membership
            </h6>
          </div>
          <div className="form">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  [e.target.name]: e.target.value,
                })
              }
            />
            {showPassword && (
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}
            {!showPassword && (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            )}
          </div>
          <button onClick={handleSignIn}>Sign Up</button>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;

    .body {
      gap: 1rem;
      .text {
        gap: 1rem;
        text-align: center;
        font-size: 2rem;
        h1 {
          padding: 0 25rem;
        }
      }
      .form {
        display: flex;
        flex-direction: column;
        width: 60%;
        input {
          padding: 1rem;
          font-size: 1rem;
          margin: 3px;
          border: none;
          color: black;
        }
        button {
          margin-top: 2px;
          background-color: #e50914;
          border: none;
          font-size: 1.1rem;
          padding: 5px;
          color: white;
          font-weight: 600;
          border-radius: 5px;
          cursor: pointer;
        }
      }
      button {
        background-color: #e50914;
        border: none;
        font-size: 1.1rem;
        padding: 5px 25px;
        color: white;
        font-weight: 600;
        border-radius: 5px;
        cursor: pointer;
      }
    }
  }
`;

export default Signup;
