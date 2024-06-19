import { useNavigate } from "react-router-dom";
import Anand from "../Assets/anand.png";
import React, { useState, useEffect } from "react";
export default function TeacherCards({ index, data, image }) {
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
            <div
              className="circle"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={data.photoUrl}
                style={{ width: "68px", height: "68px", borderRadius: "50%" }}
                alt=""
              />
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
