import "./register.css";
import {useRef} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();
  //const apiLink = process.env.API;
  const handleClick = async (e)=>{
    e.preventDefault();
    if(passwordAgain.current.value!==password.current.value){
      password.current.setCustomValidity("Passwords don't match");
    }else{
      const user = {
        username:username.current.value,
        email:email.current.value,
        password:password.current.value,
      }
      try {
        await axios.post(`https://bhavesh-annam-facebook-clone.herokuapp.com/auth/register`,user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Username" required ref={username} className="loginInput" />
            <input placeholder="Email" required ref={email} className="loginInput" type="email" />
            <input placeholder="Password" required ref={password} className="loginInput" type="password" />
            <input placeholder="Password Again" minLength="6" required ref={passwordAgain} className="loginInput" type="password" />
            <button className="loginButton" type="submit">Sign Up</button>
            <button className="loginRegisterButton" onClick={(e)=>{
              e.preventDefault()
              navigate("/login")
            }}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
