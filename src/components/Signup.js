import { useState, useEffect } from "react";
import "./Signup.css";

function Signup() {
  const [pincode, setPincode] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const pinVal = async (pin) => {
    try {
      const response = await fetch(
        `https://api.postalpincode.in/pincode/${pin}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();
      if (data[0]["Status"] === "Success") {
        setDistrict(data[0]["PostOffice"][0]["District"]);
        setCity(data[0]["PostOffice"][0]["Division"]);
      }
    } catch (error) {
      console.log("Error: " + error);
    }
  };
  useEffect(() => {
    pinVal(pincode);
  }, [pincode]);

  return (
    <>
      <div className="panel">
        <div className="btns">
          <a href="/login">
            <button className="btn">Login</button>
          </a>
          <a href="/signup">
            <button className="btn btn-active">SignUp</button>
          </a>
        </div>
        <div className="input-panel2">
          <form className="signupform" method="GET">
            <div className="datainfo">
              <div>
                <label htmlFor="name">Full Name</label>
                <br></br>
                <input type="text" name="name" placeholder="Full Name"></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="nickname">Nick Name</label>
                <br></br>
                <input
                  type="text"
                  name="nickname"
                  placeholder="Nick Name"
                ></input>
                <br></br>
              </div>

              <div className="emailID">
                <label htmlFor="email">Email ID</label>
                <br></br>
                <input
                  type="email"
                  name="email"
                  placeholder="xyz@gmail.com"
                ></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <br></br>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                ></input>
              </div>

              <div>
                <label htmlFor="phno">Phone Number</label>
                <br></br>
                <input
                  type="number"
                  name="phno"
                  placeholder="Phone Number"
                ></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="address">Address</label>
                <br></br>
                <input type="text" name="address" placeholder="Address"></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="Pincode">Pincode</label>
                <br></br>
                <input
                  type="number"
                  name="Pincode"
                  placeholder="Pincode"
                  onChange={(event) => setPincode(event.target.value)}
                ></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="City">City</label>
                <br></br>
                <input
                  type="text"
                  name="City"
                  placeholder="City"
                  value={city}
                  disabled
                ></input>
                <br></br>
              </div>

              <div>
                <label htmlFor="District">District</label>
                <br></br>
                <input
                  type="text"
                  name="District"
                  placeholder="District"
                  value={district}
                  disabled
                ></input>
                <br></br>
              </div>
            </div>
            <br></br>
            <div className="submitBtn">
              <button type="submit">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
