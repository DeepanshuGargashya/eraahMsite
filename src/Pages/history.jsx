import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect } from "react";
import { getDonationHistory } from "../utils/apiFactory";
import Explore from "./explore";
import moment from "moment";

function History() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState();
  const [history, setHistory] = useState([]);
  //   const [history, setHistory] = useState([]);

  const fetchData = () => {
    setLoading(true);
    getDonationHistory(
      (callback) => {
        setHistory(callback);
        setLoading(false);
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
    // ?
    <>
      {loading && <div></div>}
      <div className="container Teacher-support">
        <div className="row heading">
          <div className="row justify-content-start align-items-center mb-4">
            <div
              onClick={() => navigate(-1)}
              style={{
                color: "white",
                cursor: "pointer",
                width: "15%",
              }}
            >
              <ArrowBackIcon />
            </div>
            <h5 className="w-50 text-left align-items-center m-0">History</h5>
          </div>
        </div>
        <div className=" my-2">
          {history.map((item) => {
            return <HistoryCard data={item} />;
          })}
        </div>
        <div style={{ height: "8vh", width: 1 }}></div>
      </div>
    </>
    // :<Explore />
  );
}

export default History;

function HistoryCard({ data }) {
  return (
    <div className="shadow rounded my-4 p-3" style={{ position: "relative" }}>
      <div className="row align-items-start">
        <div className="col-lg-4 col-sm-4 col-md-4 col-4 d-flex flex-column justify-content-around">
          <h6 className="m-0 p-0">
            <b>Teacher</b>
          </h6>
          <p className="m-0 p-0">{data?.teacherId?.name ?? ""}</p>
        </div>
        <div className="col-lg-4 col-sm-4 col-md-4 col-4">
          <h6 className="m-0 p-0">
            <b>NGO</b>
          </h6>
          <p className="m-0 p-0">{data?.school?.name ?? ""}</p>
        </div>
        <div className="col-lg-4 col-sm-4 col-md-4 col-4 align-items-center">
          {/* <h6 style={{ color: "blue", cursor: "pointer" }}>view</h6> */}
          <h6 className="m-0 p-0">
            <b>Date</b>
          </h6>
          <p className="m-0 p-0">
            {moment(data.createdAt).format("DD MMMM YYYY")}
          </p>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: -4,
          right: 0,
          color: "white",
          backgroundColor: "green",
          borderRadius: "0.5rem",
          fontSize: "10px",
        }}
        className="p-1"
      >
        <b>&#8377;</b> {data.donateAmount ?? ""}
      </div>
    </div>
  );
}
