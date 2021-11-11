import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <>
      <div className="panel">
        <div className="btns">
          <Link to="/login">
            <button className="btn btn-active">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn">SignUp</button>
          </Link>
        </div>
        <div className="input-panel">
          <form className="loginform" method="GET">
            <label htmlFor="email">Email ID</label>
            <br></br>
            <input
              type="email"
              name="email"
              placeholder="xyz@gmail.com"
            ></input>
            <br></br>

            <div className="forPass">Forgot Password ?</div>

            <label htmlFor="password">Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
            ></input>

            <br></br>
            <div className="submitBtn">
              <button type="submit">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
