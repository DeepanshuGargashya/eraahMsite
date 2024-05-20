import ClearIcon from "@mui/icons-material/Clear";
import Flowers from "../../Assets/flowers.png";
import { NavLink } from "react-router-dom";
import react, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import fakeAnand from "../../Assets/fakeAnand.png";
import card from "../../Assets/card.png";
import upi from "../../Assets/upi.png";
import netbanking from "../../Assets/netbanking.png";
import cash from "../../Assets/cash.png";
import applepay from "../../Assets/applepay.png";
import paytm from "../../Assets/paytm.png";
import GooglePay from "../../Assets/Google Pay.png";
import arrowDown from "../../Assets/arrow-down.png";
// import 'animate.css';
function Donation() {
  // const [tags, changeTags] = useState('sort')
  // const [money, changeMoney] = useState('50')

  // const setTagValue = (tab) => {
  //     changeTags(tab);
  // }
  // const setMoneyValue = (tab) => {
  //     changeMoney(tab);
  // }
  const [tabs, settabs] = useState("Donation");
  const [amount, setamount] = useState(0);
  const [Inputamount, setInputamount] = useState(0);
  const [upiInput, setupiInput] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  console.log("location", location.state);

  const amountcircle = ["50", "100", "500", "1000"];
  const PaymentMethod = [
    {
      image: card,
      name: "Credit/Debit card",
    },
    {
      image: upi,
      name: "UPI",
    },
    {
      image: netbanking,
      name: "Net Banking",
    },
    {
      image: cash,
      name: "Cash on Delivery/Cheque",
    },
    {
      image: applepay,
      name: "Apple Pay",
    },
    {
      image: paytm,
      name: "Paytm Wallet",
    },
  ];

  const handleAmount = (value) => {
    setamount((prev) => (prev === value ? 0 : value));
  };
  const handleDonationTab = () => {
    if (tabs === "Payment") {
      settabs("Donation");
    }
  };

  const handleRadioChange = (name) => {
    setSelectedPayment(name);
  };
  return (
    <>
      {/* <div className="container px-0">
            <div className="header d-flex align-items-center px-0" style={{color:'white',padding:'20px'}}>
                <NavLink to={'/teacher'} style={{color:'white'}}><ClearIcon/></NavLink>
                <img className='px-3' src={Flowers} alt="" />
                <h3>Swetha Tiwari</h3>
            </div>

            <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={tags=='sort'? {backgroundColor:"#CEF3FF",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('sort')}>Donation</div>
            <div className="search" style={tags=='all'? {backgroundColor:"#CEF3FF",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setTagValue('all')}>Payment</div>
            <div className="search" style={tags=='nature'? {backgroundColor:"#CEF3FF",color:'black',width:'fit-content'}:{backgroundColor:"#EDEDED",color:"#616161",width:'fit-content'}} onClick={()=>setTagValue('nature')}>Review</div>
            
           
            </div> 
            <h3 className='mt-3'>Choose Amount</h3>
            <p>The donation amount will be allocated to the areas of funds most needed</p>

            <div className="search-tags d-flex justify-content-between mt-3 px-3">
            <div className="search" style={money=='50'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setMoneyValue('50')}>50</div>
            <div className="search" style={money=='100'? {backgroundColor:"#FFC700",color:'black'}:{backgroundColor:"#EDEDED",color:"#616161"}} onClick={()=>setMoneyValue('100')}>100</div>
            <div className="search" style={money=='500'? {backgroundColor:"#FFC700",color:'black',}:{backgroundColor:"#EDEDED",color:"#616161",}} onClick={()=>setMoneyValue('500')}>500</div>
            <div className="search" style={money=='1000'? {backgroundColor:"#FFC700",color:'black',}:{backgroundColor:"#EDEDED",color:"#616161",}} onClick={()=>setMoneyValue('1000')}>1000</div>
           
            </div> 

            <div className="totalDonation">
                <div className="inr d-flex justify-content-between px-4 mx-3 mt-3 py-2">
                    <h4 className='mb-0'>Total Donation</h4>
                    <p className='mb-0'>500 INR</p>
                </div>
                <NavLink to={'/homePage'}><div class="btn btn-primary donateButton mt-4 d-flex m-auto" >Proceed to Payment</div></NavLink>
            </div>
        </div> */}
      <div
        className="DonationPage"
        style={{
          position: tabs === "Donation" || tabs === "Payment" ? "relative" : "",
          height: tabs === "Donation" ? "100%" : "",
        }}
      >
        <div className="top-section" style={{ position: "sticky", top: "0" }}>
          <div className="heading">
            <h5>
              <span className="closeicon" onClick={() => navigate(-1)}>
                <ClearIcon />
              </span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <div className="circle">
                <img src={fakeAnand} alt="image" width={"100%"} />
              </div>
              &nbsp;&nbsp;
              <span>{location?.state?.Name || ""}</span>
            </h5>
          </div>
        </div>
        <div className="top-section">
          <div className="tabs d-flex text-center justify-content-center">
            <div className="tab active" onClick={() => handleDonationTab()}>
              <h6>Donation</h6>
            </div>
            <div
              className={`line ${
                tabs === "Payment" || tabs === "Review" ? "" : "hide"
              }`}
            ></div>
            <div className={`tab ${tabs === "Payment" ? "active" : ""}`}>
              <h6>Payment</h6>
            </div>
            <div className={`line ${tabs === "Review" ? "" : "hide"}`}></div>
            <div className={`tab ${tabs === "Review" ? "active" : ""}`}>
              <h6>Review</h6>
            </div>
          </div>
        </div>
        {tabs === "Donation" ? (
          <>
            <div className="donationTabs">
              <div className="head">
                <h5>Choose Amount</h5>
                <p>
                  The donation amount will be allocated to the areas of funds
                  most needed
                </p>
              </div>
              <div className="amount-circles">
                {amountcircle.map((value) => {
                  return (
                    <div
                      className={`circle ${amount === value ? "active" : ""}`}
                      onClick={() => handleAmount(value)}
                    >
                      <h5>{value}</h5>
                    </div>
                  );
                })}
              </div>
              <div class="input-group Amountinput mb-3">
                <input
                  type="number"
                  min="0"
                  class="form-control inputtag"
                  placeholder="Enter Other Amount"
                  aria-label="search"
                  aria-describedby="basic-addon1"
                  value={Inputamount > 0 ? Inputamount : ""}
                  onChange={(e) => setInputamount(e.target.value)}
                />
                <span class="input-group-text inputag-text" id="basic-addon1">
                  INR
                </span>
              </div>
            </div>
            <div
              className="bottombtns"
              style={{ position: "absolute", width: "100%", bottom: "0" }}
            >
              <div className="box">
                <div className="totalamount">
                  <h5 className="LEfth5">Total Donation</h5>
                  <h5 className="righth5">
                    <span>{Number(amount) + Number(Inputamount)}</span>
                    &nbsp;&nbsp;INR
                  </h5>
                </div>
                <div className="btns mt-3 text-center">
                  <button
                    className="btn"
                    onClick={() => settabs("Payment")}
                    disabled={
                      Number(amount) + Number(Inputamount) === 0 ? true : false
                    }
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          ""
        )}

        {tabs === "Payment" ? (
          <>
            <div className="PaymentTabs">
              <div className="head">
                <h5>Select a Payment Method</h5>
                <p>
                  The donation amount will be allocated to the areas of funds
                  most needed
                </p>
              </div>

              <div className="radioss">
                {PaymentMethod.map((value, index) => {
                  return (
                    <div
                      class={`form-check formgrp d-flex ${
                        selectedPayment === value.name ? "activeradio" : ""
                      }`}
                      key={index}
                      onClick={() => handleRadioChange(value.name)}
                    >
                      <input
                        class="form-check-input radioinput"
                        type="radio"
                        name="paymentMethod"
                        id={`flexRadioDefault${index}`}
                        value={value.name}
                        onChange={() => handleRadioChange(value.name)}
                        checked={selectedPayment === value.name}
                      />
                      &nbsp;&nbsp;
                      <label
                        class="form-check-label radiolabel"
                        htmlFor={`flexRadioDefault${index}`}
                      >
                        <img
                          src={value.image}
                          alt=" image"
                          width={
                            value.image === cash
                              ? "13%"
                              : value.image === card
                              ? "16%"
                              : "20%"
                          }
                        />
                        &nbsp;
                        {value.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            {selectedPayment === "UPI" ? (
              <>
                <div className="background-blur"></div>
                <div
                  className={`bottombtns ${
                    selectedPayment === "UPI"
                      ? "animate__animated animate__slideInUp"
                      : ""
                  }`}
                  style={{ position: "sticky", zIndex: "2", bottom: "0" }}
                >
                  <div className="text-center">
                    <img
                      src={arrowDown}
                      width={"10%"}
                      alt="down-arrow"
                      onClick={() => setSelectedPayment(null)}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                  <div className="box">
                    <label className="headinglabel mt-2">
                      Enter your UPI ID
                    </label>
                    <div className="formgrp mt-1">
                      <input
                        type="text"
                        className="inputtag"
                        placeholder="number@paytm"
                        value={upiInput}
                        onChange={(e) => setupiInput(e.target.value)}
                      />
                      <button
                        className="verifybtn"
                        onClick={() => navigate("/")}
                      >
                        Verify
                      </button>
                    </div>

                    <label className="headinglabel mt-4">Other ways</label>
                    <div className="otherways mt-1">
                      <div className="topways">
                        <h5>
                          <img src={paytm} width={"20%"} alt="image" />
                          &nbsp;&nbsp;Paytm UPI
                        </h5>
                        <div className="square">
                          <h5>Link</h5>
                        </div>
                      </div>
                      <div className="topways bottom">
                        <h5>
                          <img src={GooglePay} width={"15%"} alt="image" />
                          &nbsp;&nbsp;Google Pay UPI
                        </h5>
                        <div className="square">
                          <h5>Link</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Donation;
