import { Link, useNavigate } from "react-router-dom";
import Form from "./Form";
// import style from "../style/Signup.module.css";
import Textinput from "./Textinput";
import CheckBox from "./CheckBox";
import Button from "./Button";
import { useState } from "react";
import { UseAuth } from "../context/AuthContext";

export default function SignupForm() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPasword] = useState("");
  const [isAgree, setIsAgree] = useState(false);
  const [error, setError] = useState("");
  const [isLoding, setIsLoding] = useState();

  const { signup } = UseAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    // validate password
    if (password !== confirmPassword) {
      return setError("Password Don't Match");
    }
    try {
      setError("");
      setIsLoding(true);
      await signup(email, password, username);
      navigate("/");
    } catch (err) {
      console.log(err);
      setIsLoding(false);
      setError("Fail to create an Account");
    }
  }

  return (
    <Form
      className={"form"}
      style={{ height: "500px" }}
      onSubmit={handleSubmit}
    >
      <Textinput
        required
        type="text"
        placeholder="Enter Your Name"
        icon="person"
        value={username}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />

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
        required
        type="password"
        placeholder="Password"
        icon="lock"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Textinput
        required
        type="password"
        placeholder="Confirm Password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => {
          setConfirmPasword(e.target.value);
        }}
      />

      <CheckBox
        required
        text="I agree to the Terms &amp; Conditions"
        value={isAgree}
        onChange={(e) => {
          setIsAgree(e.target.value);
        }}
      />

      <Button disabled={isLoding} type="submit">
        <span>Submit Now</span>
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="info">
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    </Form>
  );
}
