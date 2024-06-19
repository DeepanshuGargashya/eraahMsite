import LabelBottomNavigation from "../Components/bottomNavbar";
import Anand from "../Assets/anand.png";
import HeaderImage from "../Assets/headerImage.png";
import Dots from "../Assets/dots.png";
import Kid from "../Assets/kid.png";
import Neema from "../Assets/neema.png";
import PieChartWithPaddingAngle from "../Components/pieChart";
import Walk from "../Assets/walk.png";
import Clean from "../Assets/clean.png";
import Point from "../Assets/point.png";
import { NavLink, useNavigate } from "react-router-dom";
import { getAllTeachersDonors, getNotices } from "../utils/apiFactory";
import { useEffect, useState } from "react";
import moment from "moment";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import TeacherCards from "../Components/TeacherCard";

function HomePage() {
  let navigate = useNavigate();

  const [teacherData, setTeacherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);

  const fetchData = () => {
    setLoading(true);
    getAllTeachersDonors(
      (callback) => {
        setTeacherData(callback.data);
        setLoading(false);

        getNotices(
          (callback) => {
            console.log(callback);
            setNotices(callback.data);
            setLoading(false);
          },
          (onError) => {
            console.log(onError);
            setLoading(false);
          }
        );
      },
      (onError) => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container px-0">
        <div className="header pb-4">
          <div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
            <p className="text-center mb-0">
              Hi, {JSON.parse(localStorage.getItem("donor")).name}
            </p>
            <NavLink to={"/profile"}>
              <img src={Anand} alt="" />
            </NavLink>
          </div>
          {/* <input
            class="d-flex m-auto text-center form-control me-2 my-5  "
            type="search"
            placeholder="Search for Causes/Donors/Events"
            aria-label="Search"
          /> */}
        </div>
        <img style={{ width: "100%" }} src={HeaderImage} alt="" />
        <div className="impact d-flex justify-content-between align-items-center px-4 py-2">
          <p className="mb-0">Impact feature : YouInYou Foundation</p>
          <img src={Dots} alt="" />
        </div>
        <div className="kiddo d-flex align-items-center justify-content-between">
          <div className="donate">
            <h2 className="text-center">Start making a difference today</h2>
            {/* <button className="px-3 py-2">Donate Now</button> */}
            <div
              class="btn btn-primary donateButton mt-4 d-flex m-auto"
              onClick={() => navigate("/explore")}
            >
              Donate Now
            </div>
          </div>
          <img className="d-flex m-auto" src={Kid} alt="" />
        </div>
        {/* <div className="d-flex justify-content-between px-2">
          <h5>MY IMPACT CREATED</h5>
          <p style={{ color: "#929292" }} className="mb-0">
            See All
          </p>
        </div>
        <div className="d-flex justify-content-between">
          <div className="impactContainer">
            <img src={Neema} alt="" />
            <h5>Neema Rai</h5>
            <p>YouInYou Foundation</p>
          </div>
          <div className="impactContainer">
            <img src={Neema} alt="" />
            <h5>Neema Rai</h5>
            <p>YouInYou Foundation</p>
          </div>
          <div className="impactContainer">
            <img src={Neema} alt="" />
            <h5>Neema Rai</h5>
            <p>YouInYou Foundation</p>
          </div>
        </div>
        <div className="d-flex justify-content-between px-2">
          <h5>MY DONATION BREAKDOWN</h5>
          <p style={{ color: "#929292" }} className="mb-0">
            See All
          </p>
        </div>
        <div className="d-flex">
          <div className="pie">
            <div className="foundation">To YouInYou Foundation</div>
            <div className="pie d-flex align-items-center">
              <PieChartWithPaddingAngle />
              <div className="again">
                <h3>$10,000</h3>
                <div
                  href="#"
                  class="btn btn-primary donateButton mt-2 d-flex m-auto"
                >
                  Donate Again
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div className="d-flex justify-content-between px-2">
          <h5>Donate Teachers</h5>
          <p
            style={{ color: "#929292", cursor: "pointer" }}
            className="mb-0"
            onClick={() => navigate("/explore", { state: "teachers" })}
          >
            See All
          </p>
        </div>
        <div className="Teacher-support">
          <div className="row TeacherCards">
            {teacherData && teacherData.length > 0 && (
              <>
                {teacherData.slice(0, 2).map((item, index) => {
                  return <TeacherCards index={index} data={item} image={""} />;
                })}
              </>
            )}
          </div>
        </div>
        {/* <div className="events d-flex justify-content-between row row-cols-2 mx-0"> */}
        {notices !== null && notices.length > 0 && (
          <>
            <div className="d-flex justify-content-between px-2">
              <h5>EVENTS NEAR ME</h5>
              <p
                style={{ color: "#929292", cursor: "pointer" }}
                className="mb-0"
                onClick={() => navigate("/explore", { state: "events" })}
              >
                See All
              </p>
            </div>
            <div className="events d-flex justify-content-between row row-cols-2 mx-0">
              {notices.slice(0, 2).map((item) => {
                return (
                  <div class="card eventCard mt-3 px-0">
                    <img
                      src={Walk}
                      style={{
                        width: "100%",
                        height: "10rem",
                        objectFit: "fill",
                      }}
                      class="card-img-top"
                      alt="..."
                    />
                    <div class="card-body">
                      <h5 class="card-title text-left">
                        {moment(item.date).utc().format("DD MMMM")} |{" "}
                        {item.time ?? ""} Onwards
                      </h5>
                      <h4>{item.title}</h4>
                      <div className="d-flex align-items-center">
                        <LocationOnIcon color="primary" />
                        <h5>{item.location ?? ""}</h5>
                      </div>
                      <div className="inr">
                        {item.entryFee ?? ""}{" "}
                        {item.entryFee.toLowerCase() === "free" ? "" : "INR"}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
        <div style={{ height: "8vh", width: 1 }}></div>
      </div>
      {/* </div> */}
      {/* <LabelBottomNavigation/> */}
    </>
  );
}

export default HomePage;
