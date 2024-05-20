import Anand from "../Assets/anand.png";
// import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import OTPInput from "react-otp-input";
import Popup from "../Components/Popup.js";
import { donorSendOtp, donorVerifyOtp } from "../utils/apiFactory";
import errahIcon from "../Assets/errah.png";
// import * as styles from "./style.scss";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [verify, setVerify] = useState(false);
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    setVerify("");
    setOtp("");
    setEmail(e.target.value);
  };
  const handleSubmit = (resend = false) => {
    setLoading(true);
    if (verify && !resend) {
      var payload = {
        email: email,
        otp: otp,
      };
      donorVerifyOtp(
        payload,
        (callback) => {
          setVerify(false);
          setOtp("");
          setEmail("");
          setLoading(false);
          localStorage.setItem("donor", JSON.stringify(callback.data));
          navigate("/teacher");
        },
        (onError) => {
          setLoading(false);
          setMessage(
            onError?.response?.data?.message ?? "Something went wrong"
          );
          setShowPopup(true);
          console.log(onError.response.data.message);
        }
      );
    } else {
      var payload = {
        email: email,
      };
      donorSendOtp(
        payload,
        (callback) => {
          if (resend) {
            setOtp("");
            setMessage("Otp resend Successfully");
            setShowPopup(true);
          }
          setVerify(true);
          setLoading(false);
        },
        (onError) => {
          setMessage(
            onError?.response?.data?.message ?? "Something went wrong"
          );
          setShowPopup(true);
          setLoading(false);
        }
      );
    }
  };
  return (
    <>
      {loading && <div></div>}
      <div className="container border px-0" style={{ height: "99.5vh" }}>
        <div
          className="header shadow pb-2"
          style={{ backgroundColor: "white" }}
        >
          <div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
            <div
              style={{ borderRadius: "50%", backgroundColor: "white" }}
              className="p-3"
            >
              <img
                src={errahIcon}
                style={{ width: "2.2rem", height: "2.2rem" }}
              />
            </div>
          </div>
        </div>

        <div className="col-lg-11 col-sm-11 col-md-11 col-11 m-auto mt-4 p-4 border bg-light  rounded">
          {/* <form> */}

          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control w-100"
              style={{ border: "0.5px solid black" }}
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={handleChange}
              value={email}
            />
          </div>
          <div
            className="row justify-content-end px-4"
            style={{
              display: verify ? "flex" : "none",
              color: "blue",
              textDecoration: "underline",
              fontSize: "14px",
              cursor: "pointer",
            }}
            onClick={() => handleSubmit(true)}
          >
            Resend otp
          </div>
          {verify && (
            <div className="w-100 my-3">
              <label className="form-label mb-4">
                <b>Verify Otp</b>
              </label>
              <OTPInput
                value={otp}
                containerStyle={{
                  width: "80%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  borderColor: "#6100FF",
                  borderRadius: "0.25rem",
                }}
                inputStyle={{
                  width: "20%",
                  // borderColor: "#6100FF",
                  borderRadius: "0.25rem",
                }}
                renderSeparator={<span>&nbsp;&nbsp;</span>}
                onChange={setOtp}
                numInputs={4}
                skipDefaultStyles={false}
                renderInput={(props) => <input {...props} />}
              />
            </div>
          )}
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => handleSubmit()}
          >
            {verify ? "verify" : "Send otp"}
          </button>
          {/* </form> */}
        </div>
      </div>
      <Popup
        message={message}
        setShowPopup={setShowPopup}
        showPopup={showPopup}
      />
    </>
  );
}

export default LoginPage;
