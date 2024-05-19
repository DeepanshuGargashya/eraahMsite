import React, { Suspense } from 'react';
import './App.css';
import { Route, Routes, useLocation  } from 'react-router-dom';
import LabelBottomNavigation from './Components/bottomNavbar';
import HomePage from './Pages/homePage';
import './Pages/style.scss'
import ExploreMain from './Components/Explore/exploreMain';
import Updates from './Pages/updates';
import Impact from './Pages/impact';
import Chats from './Components/Chats/chats';
import Profile from './Pages/profile';
import Causes from './Components/Explore/causes';
import Events from './Components/Explore/events';
import ImpactTeacher from './Components/Impact/impactTeacher';
import ImpactStudent from './Components/Impact/impactStudent';
import ChatScreen from './Components/Chats/chatScreen';
import Support from './Components/Support/support';
import Teacher from './Components/Support/teacher';
import Donation from './Components/Support/donation';
import TeacherProfile from './Components/Support/TeacherProfile';
function App() {
  const location = useLocation();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  const homePage = location.pathname === '/homePage' || location.pathname === '/explore' || location.pathname === '/chats' || location.pathname === '/updates' || location.pathname ==='/impact';
  return (
    <>
    <div className="App" style={{margin:'auto',height:'99.9vh'}}>
      {/* {value==='home'?<HomePage/>:value==="explore"?<ExploreMain/>:value==='chats'?<ChatScreen/>:value==='updates'?<Updates/>:value==='impact'?<Impact/>:""} */}
  
     {homePage && <LabelBottomNavigation value={value} handleChange={handleChange}/>} 
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route exact path='/' element={<Support/>}/>
        <Route exact path='/homePage' element={<HomePage/>}/>
        <Route exact path='/explore' element={<ExploreMain/>}/>
        <Route exact path='/chats' element={<Chats/>}/>
        <Route exact path='/updates' element={<Updates/>}/>
        <Route exact path='/impact' element={<Impact/>}/>
        <Route exact path='/profile' element={<Profile/>}/>
        <Route exact path='/causes' element={<Causes/>}/>
        <Route exact path='/events' element={<Events/>}/>
        <Route exact path='/impactTeacher' element={<ImpactTeacher/>}/>
        <Route exact path='/impactStudent' element={<ImpactStudent/>}/>
        <Route exact path='/chatScreen' element={<ChatScreen/>}/>
        {/* <Route exact path='/support' element={<Support/>}/> */}
        <Route exact path='/teacher' element={<Teacher/>}/>
        <Route exact path='/donation' element={<Donation/>}/>
        <Route exact path='/TeacherProfile' element={<TeacherProfile/>}/>
      </Routes>
      {/* </Suspense> */}
     
     
       </div>
       </>
  );
}

export default App;
