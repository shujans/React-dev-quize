import Form from "./Form";
import { UseAuth } from "../context/AuthContext";
import Textinput from "./Textinput";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState();

  const { login } = UseAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // validate password

    try {
      setError("");
      setIsLoding(true);
      await login(email, password);
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsLoding(false);
      setError("Fail to Login");
    }
  }

  return (
    <Form style={{ height: "330px" }} className="form" onSubmit={handleSubmit}>
      <Textinput
        type="email"
        placeholder="Examples@gmail.com"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Textinput
        type="password"
        placeholder="********"
        icon="lock"
        required
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button disabled={isLoding} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </Form>
  );
}
