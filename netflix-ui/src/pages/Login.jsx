import React, { useState } from "react";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleLogIn = async () => {
    try {
      const { email, password } = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (err) {
      console.log(err);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header />
        <div className="form-container flex column a-center j-center">
          <div className="form flex column a-center j-center">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="container flex column">
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

              <button onClick={handleLogIn}>Log In</button>
            </div>
          </div>
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

    .form-container {
      height: 85vh;
      .form {
        width: 25%;
        background-color: #000000b0;
        height: 40vh;
        gap: 2rem;

        .container {
          width: 80%;
          padding: 5px 30px;
          gap: 2rem;
          input {
            padding: 0.5rem;
            width: 100%;
            border: none;
            color: black;
            font-size: 1.02rem;
          }
          button {
            padding: 0.5rem;
            cursor: pointer;
            background-color: #e50914;
            border: none;
            color: white;
            font-weight: 700;
            font-size: 1.1rem;
            transition: all 0.3s;
          }

          button:hover {
            border-radius: 10px;
          }
        }
      }
    }
  }
`;

export default Login;
