import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation, Outlet, Navigate } from "react-router-dom";
// import { Navigate, Outlet } from "react-router-dom";
import LabelBottomNavigation from "./Components/bottomNavbar";
import HomePage from "./Pages/homePage";
import "./Pages/style.scss";
import ExploreMain from "./Components/Explore/exploreMain";
import Updates from "./Pages/updates";
import Impact from "./Pages/impact";
import Chats from "./Components/Chats/chats";
import Profile from "./Pages/profile";
import Causes from "./Components/Explore/causes";
import Events from "./Components/Explore/events";
import ImpactTeacher from "./Components/Impact/impactTeacher";
import ImpactStudent from "./Components/Impact/impactStudent";
import ChatScreen from "./Components/Chats/chatScreen";
import Support from "./Components/Support/support";
import Teacher from "./Components/Support/teacher";
import Donation from "./Components/Support/donation";
import TeacherProfile from "./Components/Support/TeacherProfile";
// import { Login } from "@mui/icons-material";
import LoginPage from "./Pages/LoginPage";
import NgoTeacher from "./Components/Explore/ngoTeacher";
import History from "./Pages/history";
function App() {
  const location = useLocation();
  const [value, setValue] = React.useState("Home");

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
  };

  const homePage =
    location.pathname === "/" ||
    location.pathname === "/explore" ||
    location.pathname === "/chats" ||
    location.pathname === "/updates" ||
    location.pathname === "/impact";
  return (
    <>
      <div className="App" style={{ margin: "auto", height: "99.9vh" }}>
        {/* {value==='home'?<HomePage/>:value==="explore"?<ExploreMain/>:value==='chats'?<ChatScreen/>:value==='updates'?<Updates/>:value==='impact'?<Impact/>:""} */}

        {homePage && (
          <LabelBottomNavigation value={value} handleChange={handleChange} />
        )}
        {/* <Suspense fallback={<div>Loading...</div>}> */}
        <Routes>
          <Route element={<LoginComponent login={false} />}>
            <Route exact path="/login" element={<LoginPage />} />
          </Route>
          <Route element={<LoginComponent login={true} />}>
            <Route exact path="/support" element={<Support />} />
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/explore" element={<ExploreMain />} />
            <Route exact path="/chats" element={<Chats />} />
            <Route exact path="/updates" element={<Updates />} />
            <Route exact path="/impact" element={<Impact />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/causes" element={<Causes />} />
            <Route exact path="/events" element={<Events />} />
            <Route exact path="/impactTeacher" element={<ImpactTeacher />} />
            <Route exact path="/impactStudent" element={<ImpactStudent />} />
            <Route exact path="/chatScreen" element={<ChatScreen />} />
            {/* <Route exact path='/support' element={<Support/>}/> */}
            <Route exact path="/teacher" element={<Teacher />} />
            <Route exact path="/ngoTeacher" element={<NgoTeacher />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/donation" element={<Donation />} />
            <Route exact path="/TeacherProfile" element={<TeacherProfile />} />
          </Route>
        </Routes>
        {/* </Suspense> */}
      </div>
    </>
  );
}
function LoginComponent({ login }) {
  let auth = localStorage.getItem("donor");
  return auth ? (
    login ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    )
  ) : login ? (
    <Navigate to="/login" />
  ) : (
    <Outlet />
  );
}

export default App;
