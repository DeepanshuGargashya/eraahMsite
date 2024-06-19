import Education from "../../Assets/Education.png";
import TeacherImage from "../../Assets/teacher.png";
import Flowers from "../../Assets/flowers.png";
import searchicon from "../../Assets/searchicon.png";
import staricon from "../../Assets/staricon.png";
import fakeAnand from "../../Assets/fakeAnand.png";
import locationicon from "../../Assets/locationicon.png";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { getAllTeachersDonors } from "../../utils/apiFactory";
function Teacher() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [filterTeacherData, setFilterTeacherData] = useState([]);

  const fetchAllTeachers = () => {
    setLoading(true);
    getAllTeachersDonors(
      (callback) => {
        setLoading(false);
        setTeacherData(callback.data);
      },
      (onError) => {
        setLoading(false);
      }
    );
  };

  const handleFilterData = (e) => {
    setSearch(e.target.value);
    console.log(e.target);
    if (e.target.value === "") {
      setFilterTeacherData([]);
    } else {
      setFilterTeacherData(
        teacherData.filter((item) =>
          item.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    }
  };

  useEffect(() => {
    fetchAllTeachers();
  }, []);

  return (
    <>
      {loading && <div></div>}
      <div className="container Teacher-support">
        <div className="row heading">
          <div className="row justify-content-between align-items-center">
            <h5 className="w-50 text-left">Welcome 😊</h5>
            <h6
              className="w-50 text-end text-white"
              style={{ cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Skip
            </h6>
          </div>
          <div class="input-group searchinput mb-3">
            <span class="input-group-text inputag-text" id="basic-addon1">
              <img src={searchicon} alt="search_icon" width={"50%"} />
            </span>
            <input
              type="text"
              className="form-control inputtag"
              placeholder="Seach for Teachers"
              aria-label="search"
              aria-describedby="basic-addon1"
              onChange={handleFilterData}
              value={search}
            />
          </div>
        </div>
        <div className="teachers">
          <div className="top-heading">
            <h5>Choose a teacher to support</h5>
            <p>
              A good education starts with a good teacher. Here we have our list
              of teachers you can support
            </p>
          </div>
        </div>
        <div className="row TeacherCards">
          {teacherData && teacherData.length && (
            <>
              {search.length > 0
                ? filterTeacherData.map((da, index) => {
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
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Teacher;

function TeacherCards({ index, data, image }) {
  const navigate = useNavigate();
  const [teachSubjects, setTeachSubjects] = useState("");
  useEffect(() => {
    let subjects = "";
    data?.teachSubject?.map((value, idx) => {
      subjects = subjects + (idx === 0 ? "" : ", ") + value?.subName;
    });
    setTeachSubjects(subjects);
    console.log(subjects);
  }, [data]);

  console.log("teachSubjects");
  console.log(teachSubjects);
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
              <img src={fakeAnand} width={"100%"} alt="" />
            </div>
            <h5 className="nametext">{data.name}</h5>
            <p className="teacher-about">
              {teachSubjects.length + data?.school?.schoolName.length > 22
                ? `${teachSubjects ?? ""} teacher for ${
                    data?.school?.schoolName ?? ""
                  }`.substring(0, 35) + "..."
                : `${teachSubjects ?? ""} teacher for ${
                    data?.school?.schoolName ?? ""
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
