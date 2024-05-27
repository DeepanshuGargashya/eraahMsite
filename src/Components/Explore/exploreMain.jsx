import Anand from "../../Assets/anand.png";
import React, { useState, useEffect } from "react";
import Cause1 from "../../Assets/cause1.png";
import Cause2 from "../../Assets/cause2.png";
import Cause3 from "../../Assets/cause3.png";
import Star from "../../Assets/star.png";
import Point from "../../Assets/point.png";
import Ngo1 from "../../Assets/ngo1.png";
import Ngo2 from "../../Assets/ngo2.png";
import Ngo3 from "../../Assets/ngo3.png";
import { NavLink, useLocation } from "react-router-dom";
import Explore from "../../Pages/explore";
import Walk from "../../Assets/walk.png";
import { useNavigate } from "react-router-dom";

import moment from "moment";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import {
  getAllTeachersDonors,
  getNgos,
  getNotices,
} from "../../utils/apiFactory.js";

function ExploreMain() {
  const location = useLocation();
  let navigate = useNavigate();
  const [value, changeValue] = useState("teachers");
  const [tags, changeTags] = useState("sort");

  const [showDonation, setShowDonation] = useState(false);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [selectedNgoId, setSelectedNgoId] = useState("");
  const [filterData, setFilterData] = useState([]);
  // const [loading, setLoading] = useState(true);
  const [notices, setNotices] = useState([]);
  const [ngos, setNgos] = useState([]);

  useEffect(() => {
    setFilterData([]);
    setSearch("");
    console.log(value);
  }, [value]);

  const fetchData = () => {
    setLoading(true);
    getAllTeachersDonors(
      (callback) => {
        setTeacherData(callback.data);
        setLoading(false);
        getNgos(
          (callback) => {
            setNgos(callback);
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

  // const fetchAllTeachers = () => {
  //   setLoading(true);

  // };

  const handleFilterData = (e) => {
    setSearch(e.target.value);
    console.log(e.target);
    if (e.target.value === "") {
      setFilterData([]);
    } else {
      if (value === "teachers") {
        setFilterData(
          teacherData.filter((item) =>
            item.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      } else if (value === "ngos") {
        setFilterData(
          ngos.filter((item) =>
            item?.school?.schoolName
              ?.toLowerCase()
              .includes(e.target.value.toLowerCase())
          )
        );
      } else {
        setFilterData(
          notices.filter((item) =>
            item?.title?.toLowerCase().includes(e.target.value.toLowerCase())
          )
        );
      }
    }
  };

  useEffect(() => {
    // setBottomValue("Explore");
    if (location?.state) {
      changeValue(location.state);
    }
    fetchData();
  }, []);

  const handleDonation = (id) => {
    setSelectedNgoId(id);
    setShowDonation(true);
  };

  const setTabValue = (tab) => {
    changeValue(tab);
  };
  const setTagValue = (tab) => {
    changeTags(tab);
  };
  return (
    <>
      {!showDonation ? (
        <div className="container px-0 Teacher-support">
          <div className="header">
            <div className="d-flex justify-content-between homepage px-5 pt-4 pb-2 align-items-center">
              <p className="text-center mb-0">Explore</p>
              <img src={Anand} alt="" />
            </div>
            <input
              class="d-flex m-auto text-center form-control me-2 my-5  "
              type="search"
              placeholder="Search for Causes/Donors/Events"
              aria-label="Search"
              value={search}
              onChange={handleFilterData}
            />

            <div className="d-flex justify-content-evenly mt-4">
              <div
                className="cause"
                style={
                  value === "teachers"
                    ? { color: "white", fontWeight: "500" }
                    : { color: "#ADADAD" }
                }
                onClick={() => setTabValue("teachers")}
              >
                Teachers
              </div>
              <div
                className="cause"
                style={
                  value === "ngos"
                    ? { color: "white", fontWeight: "500" }
                    : { color: "#ADADAD" }
                }
                onClick={() => setTabValue("ngos")}
              >
                NGO's
              </div>
              <div
                className="cause"
                style={
                  value === "events"
                    ? { color: "white", fontWeight: "500" }
                    : { color: "#ADADAD" }
                }
                onClick={() => setTabValue("events")}
              >
                Events
              </div>
            </div>
          </div>

          {/* <div class="table-responsive"> */}

          {/* <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={tags=='sort'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('sort')}>Sort</div>
            <div className="search" style={tags=='all'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('all')}>All</div>
            <div className="search" style={tags=='nature'? {backgroundColor:"#FFC700",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('nature')}>Nature</div>
            <div className="search" style={tags=='education'? {backgroundColor:"#FFC700",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('education')}>Education</div>
           
            </div> 
        </div> */}
          {/* <div className="result d-flex justify-content-between mt-2 px-3">
                <p>Showing results for ‘All’</p>
                <p>100 results</p>
                </div> */}

          {value === "teachers" ? (
            <>
              {/* <div className="causesContainer">
                <div className="row row-cols-2 justify-content-between mx-0 ">
                  <div class="card px-0 mt-3">
                    <img src={Cause1} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="days">1 day left!</div>
                        <div className="foundation">
                          YouInYou Foundation, Delhi
                        </div>
                      </div>
                      <h4 class="card-title mt-2">Education for young girls</h4>
                      <div className="childrensPost d-flex justify-content-between ">
                        <span>&#x20B9;4,373</span>
                        <span>35%</span>
                        <span className="count" style={{ color: "#5400DC" }}>
                          &#x20B9;10,000
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="childrensPost d-flex justify-content-between">
                        <span>Paid</span>
                        <span className="count">Remaining</span>
                      </div>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <NavLink to={"/causes"}>
                        <div
                          href="#"
                          class="btn btn-primary donateButton mt-4 d-flex m-auto"
                        >
                          Donate
                        </div>
                      </NavLink>
                    </div>
                  </div>
                  <div class="card px-0 mt-3">
                    <img src={Cause2} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="days">1 day left!</div>
                        <div className="foundation">Care4Dogs, Mumbai</div>
                      </div>
                      <h4 class="card-title mt-2">Shelter for street dogs</h4>
                      <div className="childrensPost d-flex justify-content-between ">
                        <span>&#x20B9;4,373</span>
                        <span>35%</span>
                        <span className="count" style={{ color: "#5400DC" }}>
                          &#x20B9;10,000
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="childrensPost d-flex justify-content-between">
                        <span>Paid</span>
                        <span className="count">Remaining</span>
                      </div>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div
                        href="#"
                        class="btn btn-primary donateButton mt-4 d-flex m-auto"
                      >
                        Donate
                      </div>
                    </div>
                  </div>
                  <div class="card px-0 mt-3 mb-5">
                    <img src={Cause3} class="card-img-top" alt="..." />
                    <div class="card-body">
                      <div className="d-flex justify-content-between">
                        <div className="days">1 day left!</div>
                        <div className="foundation">YSakriya, Rajasthan</div>
                      </div>
                      <h4 class="card-title mt-2">Uplift rural women</h4>
                      <div className="childrensPost d-flex justify-content-between ">
                        <span>&#x20B9;4,373</span>
                        <span>35%</span>
                        <span className="count" style={{ color: "#5400DC" }}>
                          &#x20B9;10,000
                        </span>
                      </div>
                      <div class="progress">
                        <div
                          class="progress-bar"
                          role="progressbar"
                          style={{ width: "25%" }}
                          aria-valuenow="25"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div className="childrensPost d-flex justify-content-between">
                        <span>Paid</span>
                        <span className="count">Remaining</span>
                      </div>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <div
                        href="#"
                        class="btn btn-primary donateButton mt-4 d-flex m-auto"
                      >
                        Donate
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="ngoContainer my-4">
                <div className="row TeacherCards">
                  {search.length > 0
                    ? filterData.map((da, index) => {
                        return (
                          <TeacherCards
                            key={index}
                            index={index}
                            data={da}
                            image={da.image}
                          />
                        );
                      })
                    : teacherData.map((da, index) => {
                        return (
                          <TeacherCards
                            key={index}
                            index={index}
                            data={da}
                            image={da.image}
                          />
                        );
                      })}
                </div>
              </div>
              <div style={{ height: "8vh", width: 1 }}></div>
            </>
          ) : value === "ngos" ? (
            <>
              <div className="ngoContainer my-4">
                <div className="d-flex flex-wrap justify-content-between">
                  {search.length > 0
                    ? filterData.map((item, index) => {
                        return (
                          <>
                            <div
                              className="ngoss my-2"
                              style={{ width: "45%" }}
                            >
                              <div className="city d-flex justify-content-end">
                                {/* <div className="d-flex starssss justify-content-center">
                              <img src={Star} alt="" />
                              4.5
                            </div> */}
                                <div className="d-flex pointttt justify-content-center">
                                  <LocationOnIcon color="primary" />
                                  {item.school?.city ?? ""}
                                </div>
                              </div>
                              <img
                                className="d-flex m-auto my-3"
                                style={{ width: "50%" }}
                                src={Ngo1}
                                alt=""
                              />
                              <h4 className="text-center">
                                {item.school?.schoolName ?? ""}
                              </h4>
                              <p className="text-center">
                                Supports and uplifts underprivileged children
                                across {item.school?.state ?? ""}
                              </p>
                              <div
                                class="btn btn-primary donateButton mt-4 d-flex m-auto"
                                onClick={() =>
                                  handleDonation(item.school?._id ?? "")
                                }
                              >
                                Donate Now
                              </div>
                            </div>
                          </>
                        );
                      })
                    : ngos.map((item) => {
                        return (
                          <>
                            <div
                              className="ngoss my-2"
                              style={{ width: "45%" }}
                            >
                              <div className="city d-flex justify-content-end">
                                {/* <div className="d-flex starssss justify-content-center">
                              <img src={Star} alt="" />
                              4.5
                            </div> */}
                                <div className="d-flex pointttt justify-content-center">
                                  <LocationOnIcon color="primary" />
                                  {item.school?.city ?? ""}
                                </div>
                              </div>
                              <img
                                className="d-flex m-auto my-3"
                                style={{ width: "50%" }}
                                src={Ngo1}
                                alt=""
                              />
                              <h4 className="text-center">
                                {item.school?.schoolName ?? ""}
                              </h4>
                              <p className="text-center">
                                Supports and uplifts underprivileged children
                                across {item.school?.state ?? ""}
                              </p>
                              <div
                                class="btn btn-primary donateButton mt-4 d-flex m-auto"
                                onClick={() =>
                                  handleDonation(item.school?._id ?? "")
                                }
                              >
                                Donate Now
                              </div>
                            </div>
                          </>
                        );
                      })}

                  {/* <div className="ngoss" style={{ width: "45%" }}>
                    <div className="city d-flex justify-content-between">
                      <div className="d-flex starssss justify-content-center">
                        <img src={Star} alt="" />
                        4.5
                      </div>
                      <div className="d-flex pointttt justify-content-center">
                        <img style={{ width: "20%" }} src={Point} alt="" />
                        Jaipur
                      </div>
                    </div>
                    <img
                      className="d-flex m-auto my-3"
                      style={{ width: "50%" }}
                      src={Ngo2}
                      alt=""
                    />
                    <h4 className="text-center">WeCare</h4>
                    <p className="text-center">
                      Supports and uplifts scheduled tribes in Rajasthan
                    </p>
                    <div
                      onClick={() => handleDonation()}
                      class="btn btn-primary donateButton mt-4 d-flex m-auto"
                    >
                      Donate Now
                    </div>
                  </div>
                  <div className="ngoss mt-3 mb" style={{ width: "45%" }}>
                    <div className="city d-flex justify-content-between">
                      <div className="d-flex starssss justify-content-center">
                        <img src={Star} alt="" />
                        4.5
                      </div>
                      <div className="d-flex pointttt justify-content-center">
                        <img style={{ width: "20%" }} src={Point} alt="" />
                        Raipur
                      </div>
                    </div>
                    <img
                      className="d-flex m-auto my-3"
                      style={{ width: "50%" }}
                      src={Ngo3}
                      alt=""
                    />
                    <h4 className="text-center">Village Welfare</h4>
                    <p className="text-center">
                      Nurturing progress in rural communities with care
                    </p>
                    <div
                      onClick={() => handleDonation()}
                      class="btn btn-primary donateButton mt-4 d-flex m-auto"
                    >
                      Donate Now
                    </div>
                  </div> */}
                </div>
              </div>
              <div style={{ height: "8vh", width: 1 }}></div>
            </>
          ) : value === "events" ? (
            <>
              <div className="ngoContainer my-4">
                {search.length > 0
                  ? filterData.map((item, index) => {
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
                              {item?.entryFee?.toLowerCase() === "free"
                                ? ""
                                : "INR"}
                            </div>
                          </div>
                        </div>
                      );
                    })
                  : notices.map((item) => {
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
                              {item.entryFee.toLowerCase() === "free"
                                ? ""
                                : "INR"}
                            </div>
                          </div>
                        </div>
                      );
                    })}
              </div>
              <div style={{ height: "8vh", width: 1 }}></div>
            </>
          ) : (
            ""
          )}
        </div>
      ) : selectedNgoId.length > 0 ? (
        <Explore
          setShowDonation={setShowDonation}
          selectedNgoId={selectedNgoId}
        />
      ) : (
        navigate("/explore")
      )}
    </>
  );
}

function TeacherCards({ index, data, image }) {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="col-6"
        style={{
          margin: "10px 0px",
          paddingLeft: index % 2 !== 0 ? "6px" : "",
          paddingRight: index % 2 === 0 ? "6px" : "",
        }}
      >
        <div className="box">
          {/* <div className="toptext">
            <div className="lefttext">
              <h6>
                <img src={staricon} alt="favourite-icon" width={"20%"} />
                &nbsp;{data.rating}
              </h6>
            </div>
            <div className="righttext">
              <h6>
                <img src={locationicon} alt="location-icon" width={"25%"} />
                {data.location}
              </h6>
            </div>
          </div> */}
          <div className="mainprofile">
            <div className="circle">
              <img src={Anand} width={"100%"} alt="" />
            </div>
            <h5 className="nametext">{data.name}</h5>
            <p className="teacher-about">
              {data?.teachSubject?.subName.length +
                data?.school?.schoolName.length >
              22
                ? `${data?.teachSubject?.subName ?? "NA"} teacher for ${
                    data?.school?.schoolName ?? "NA"
                  }`.substring(0, 35) + "..."
                : `${data?.teachSubject?.subName ?? "NA"} teacher for ${
                    data?.school?.schoolName ?? "NA"
                  }`}
            </p>
            <p
              className="viewprofile"
              onClick={() => navigate("/TeacherProfile", { state: data._id })}
            >
              View Profile
            </p>
            <button
              className="donate-now"
              onClick={() => navigate("/donation", { state: data._id })}
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ExploreMain;
