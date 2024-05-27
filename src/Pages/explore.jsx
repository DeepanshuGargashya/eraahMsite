import ExploreImage from "../Assets/exploreImage.png";
import Star from "../Assets/star.png";
import Point from "../Assets/point.png";
import Ngo from "../Assets/ngo.png";
import Feed1 from "../Assets/feed1.png";
import Feed2 from "../Assets/feed2.png";
import Feed3 from "../Assets/feed3.png";
import Feed4 from "../Assets/feed4.png";
import Feed5 from "../Assets/feed5.png";
import Feed6 from "../Assets/feed6.png";
import { useState, useEffect } from "react";
import Ratings from "../Assets/rating.png";
import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import Review1 from "../Assets/review1.png";
import Insta from "../Assets/insta.png";
import FaceBook from "../Assets/Facebook.png";
import Web from "../Assets/Web.png";
import WhatsApp from "../Assets/whatsapp.png";
import { NavLink, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Save from "../Assets/save.png";
import { getNgoDetails } from "../utils/apiFactory";

function Explore({ setShowDonation, selectedNgoId }) {
  let navigate = useNavigate();
  const [value, changeValue] = useState("feed");
  const [loading, setLoading] = useState(true);
  const [ngoData, setNgoData] = useState({});
  const [valuee, setValue] = React.useState(2);

  const setTabValue = (tab) => {
    changeValue(tab);
  };

  const fetchNgoData = () => {
    setLoading(true);
    getNgoDetails(
      selectedNgoId,
      (callback) => {
        setNgoData(callback);
        setLoading(false);
      },
      (onError) => {
        setLoading(false);
      }
    );
  };

  useEffect(() => {
    fetchNgoData();
  }, []);

  return (
    <>
      <div className="container px-0 explore">
        <div className="causeBanner">
          <img src={ExploreImage} alt="" />
          <div className="arrowBack d-flex justify-content-between">
            <div
              onClick={() => setShowDonation(false)}
              style={{ color: "white", cursor: "pointer" }}
            >
              <ArrowBackIcon />
            </div>
            {/* <div className="saved">
              <img src={Save} alt="" />
            </div> */}
          </div>
        </div>
        <div className="exploreBelow">
          {/* <img style={{width:'100%'}} src={ExploreImage} alt="" /> */}
          <div className="d-flex justify-content-around py-3">
            <div className="stars d-flex align-items-center">
              <img src={Star} alt="" />
              <h5 className="mb-0">4.5</h5>
            </div>

            <div className="pointt d-flex align-items-center">
              <img src={Point} alt="" />
              <h5 className="mb-0">Gurgaon</h5>
            </div>
          </div>
        </div>
        {/* <div className="ngoImage">
                <img src={Ngo} alt="" />
            </div> */}
        <h3 className="text-center mt-3">YouInYou Foundation</h3>
        <h5 className="text-center">
          Supports and uplifts underprivileged children across India.{" "}
        </h5>
        <p className="text-center ">
          <a href="">www.youinyoufoundation.com and 1 more link</a>
        </p>
        <div className="d-flex">
          <div
            href="#"
            class="btn btn-primary donateButton mt-4 d-flex m-auto"
            style={{ padding: "10px 45px" }}
            onClick={() => {
              navigate("/ngoTeacher", { state: selectedNgoId });
            }}
          >
            Donate
          </div>
          <div href="#" class="btn btn-primary message mt-4 d-flex m-auto">
            Message
          </div>
        </div>
        <div className="d-flex justify-content-evenly mt-4">
          <div
            className="fed"
            style={
              value === "feed"
                ? { color: "Black", fontWeight: "500" }
                : { color: "#ADADAD" }
            }
            onClick={() => setTabValue("feed")}
          >
            Feed
          </div>
          <div
            className="fed"
            style={
              value === "review"
                ? { color: "Black", fontWeight: "500" }
                : { color: "#ADADAD" }
            }
            onClick={() => setTabValue("review")}
          >
            Reviews
          </div>
          <div
            className="fed"
            style={
              value === "about"
                ? { color: "Black", fontWeight: "500" }
                : { color: "#ADADAD" }
            }
            onClick={() => setTabValue("about")}
          >
            About
          </div>
        </div>
        {value === "feed" ? (
          <>
            <div className="feeds row-cols-4 d-flex justify-content-around">
              <img style={{ margin: "6px" }} src={Feed1} alt="" />
              <img style={{ margin: "6px" }} src={Feed2} alt="" />
              <img style={{ margin: "6px" }} src={Feed3} alt="" />
            </div>
            <div className="feeds row-cols-4 d-flex justify-content-around">
              <img style={{ margin: "6px" }} src={Feed4} alt="" />
              <img style={{ margin: "6px" }} src={Feed5} alt="" />
              <img style={{ margin: "6px" }} src={Feed6} alt="" />
            </div>
          </>
        ) : value === "review" ? (
          <>
            <div className="container">
              <div className="plus mt-3">+</div>
              <h4>Rating summary (based on 56 reviews)</h4>
              <div className="d-flex">
                <img src={Ratings} alt="" />
                <div className="starsss text-center">
                  <p className="mb-0">4.5</p>
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Rating
                      name="simple-controlled"
                      value={valuee}
                      onChange={(event, newValue) => {
                        setValue(newValue);
                      }}
                    />
                  </Box>
                </div>
              </div>
              <div className="review mt-3">
                <div className="reviewImage d-flex align-items-center justify-content-around">
                  <img src={Review1} alt="" />

                  <div className="reviewStar">
                    <h3>Rochelle rated 5 stars</h3>
                    <Box
                      sx={{
                        "& > legend": { mt: 2 },
                      }}
                    >
                      <Rating
                        name="simple-controlled"
                        value={valuee}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                    </Box>
                  </div>
                  <p className="mb-0 d-flex ">1 week ago</p>
                </div>
                <span>
                  So far so good experience with YouinYou Foundation. I would
                  like to appreciate the humility and authenticity of the team.
                  Everyone is passionate about what they are doing, and the
                  impact is hard to miss
                </span>
              </div>
            </div>
          </>
        ) : value === "about" ? (
          <>
            <div className="container">
              <h3>Description</h3>
              <div className="about">
                <p>
                  YouInYou Foundation is a distinguished non-governmental
                  organization (NGO) based in India, dedicated to the cause of
                  supporting and uplifting underprivileged children throughout
                  the country.{" "}
                </p>
                <p>
                  Established with a vision of creating a brighter and more
                  equitable future for the youth of India, the foundation is
                  committed to catalyzing positive change in the lives of
                  disadvantaged children by providing them with access to
                  essential resources and opportunities.
                </p>
                <h3>Links & Contact</h3>
              </div>
              <div className="d-flex mt-3 ">
                <img style={{ width: "5%" }} src={Insta} alt="" />
                <a className="px-3">instagram.com/youinyoufoundation</a>
              </div>
              <div className="d-flex mt-3 ">
                <img style={{ width: "5%" }} src={FaceBook} alt="" />
                <a className="px-3">facebook.com/youinyoufoundation</a>
              </div>
              <div className="d-flex mt-3 ">
                <img style={{ width: "5%" }} src={Web} alt="" />
                <a className="px-3">www.youinyoufoundation.com</a>
              </div>
              <div className="d-flex mt-3 ">
                <img style={{ width: "5%" }} src={WhatsApp} alt="" />
                <a className="px-3">+91 8271718678</a>
              </div>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
export default Explore;
