import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Anand from "../Assets/fakeAnand.png";
import Donate from "../Assets/donation.png";
import Save from "../Assets/save.png";
import Activity from "../Assets/activity.png";
import Update from "../Assets/update.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Personal from "../Assets/personal.png";
import Payment from "../Assets/payment.png";
import Security from "../Assets/security.png";
import Noti from "../Assets/noti.png";
import Privacy from "../Assets/privacy.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
  const data = JSON.parse(localStorage.getItem("donor"));
  return (
    <>
      <div className="container px-0 pb-5">
        <div className="header pt-4 pb-2">
          <div className="d-flex align-items-center" style={{ color: "white" }}>
            <NavLink to="/" style={{ color: "white" }}>
              <ArrowBackIcon />
            </NavLink>
            <h4 className="px-2 mb-0">Profile</h4>
          </div>
        </div>

        <img className="d-flex m-auto mt-4" src={Anand} alt="" />
        <h3 className="text-center my-1">{data.name ?? ""}</h3>
        <p className="text-center">{data.email ?? ""}</p>

        <div className="d-flex justify-content-between px-4">
          <div className="donation">
            <img className="d-flex m-auto" src={Donate} alt="" />
            <p className="text-center">Donation History</p>
          </div>
          <div className="donation">
            <img className="d-flex m-auto" src={Save} alt="" />
            <p className="text-center">Saved</p>
          </div>
          <div className="donation">
            <img className="d-flex m-auto" src={Activity} alt="" />
            <p className="text-center">Activity</p>
          </div>
        </div>

        <div className="update d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Update} alt="" />
            </div>
            <p className="px-3 mb-0">App Update Available</p>
          </div>
          <div className="arrow text-warning">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <h3 className="mt-3 mx-3">Settings</h3>
        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Personal} alt="" />
            </div>
            <p className="px-3 mb-0">Personal information</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Payment} alt="" />
            </div>
            <p className="px-3 mb-0">Payment Methods</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <NavLink to={"/support"} style={{ textDecoration: "none" }}>
          <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
            <div className="available d-flex align-items-center">
              <div className="updateCircle">
                <img src={Security} alt="" />
              </div>
              <p className="px-3 mb-0" style={{ color: "black" }}>
                Login & Security
              </p>
            </div>
            <div className="arrow text-muted">
              <ArrowForwardIosIcon />
            </div>
          </div>
        </NavLink>

        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Noti} alt="" />
            </div>
            <p className="px-3 mb-0">Notifications</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Privacy} alt="" />
            </div>
            <p className="px-3 mb-0">Privacy</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>

        <h3 className="mt-3 mx-3">Support</h3>
        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Personal} alt="" />
            </div>
            <p className="px-3 mb-0">Login & Security</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="settings d-flex align-items-center justify-content-between mx-4 mt-3">
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <img src={Payment} alt="" />
            </div>
            <p className="px-3 mb-0">Notifications</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div
          className="settings d-flex align-items-center justify-content-between mx-4 mt-3"
          style={{ cursor: "pointer" }}
          onClick={() => {
            localStorage.clear();
            window.location.reload();
          }}
        >
          <div className="available d-flex align-items-center">
            <div className="updateCircle">
              <LogoutIcon style={{ width: "15px" }} color="disabled" />
            </div>
            <p className="px-3 mb-0">Logout</p>
          </div>
          <div className="arrow text-muted">
            <ArrowForwardIosIcon />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
