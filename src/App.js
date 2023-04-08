import LeftSahifa from "./twitter/LeftSahifa";
import { Routes, Route, Navigate } from "react-router-dom";
import Right from "./right/Right";
import Home from "./conbanent/Home";
import Explore from "./explore/Explore";
import "./App.css";
import Notifications from "./Notifications/Notifications";
import Messages from "./Messages/Messages";
import Bookmarks from "./Bookmarks/Bookmarks";
import Profile from "./Profile/Profile";
import More from "./More/More";
import Fetch from "./conbanent/Fetch";
import Followers from "./Profile/Followers";
import Following from "./Profile/Following";
import Verified from "./Notifications/Verified";
import Mentions from "./Notifications/Mentions";
import Register from './register/Register';
import Login from './Login/Login';
function App() {
  return (
    <div className='container pt-3 d-flex justify-content-lg-between'>
      <LeftSahifa />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Explore' element={<Explore />} />
        <Route path='/Notifications' element={<Notifications />} />
        <Route path='/Messages' element={<Messages />} />
        <Route path='/Bookmarks' element={<Bookmarks />} />
        <Route path='/Profile' element={<Profile />} />
        <Route path='/More' element={<More />} />
        <Route path='/follow' element={<Followers />} />
        <Route path='/Following' element={<Fetch />} />
        <Route path='/fol' element={<Following />} />
        <Route path='/not' element={<Notifications />} />
        <Route path='/ver' element={<Verified />} />
        <Route path='/men' element={<Mentions />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>

      {true ? <Right /> : <More />}
    </div>
  );
}

export default App;
