import LeftSahifa from './twitter/LeftSahifa';
import { Routes, Route, Navigate } from 'react-router-dom';
import Right from './right/Right';
import Home from './conbanent/Home';
import Explore from './explore/Explore';
import './App.css'
import Notifications from './Notifications/Notifications';
import Messages from './Messages/Messages';
import Bookmarks from './Bookmarks/Bookmarks';
import Lists from './Lists/Lists';
import Profile from './Profile/Profile';
import More from './More/More';
import Fetch from './conbanent/Fetch';
function App() {
  return (
    <div className='container pt-3 d-flex justify-content-lg-between'>
      <LeftSahifa />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Explore' element={<Explore/>}/>
      <Route path='/Notifications' element={<Notifications/>}/>
      <Route path='/Messages' element={<Messages/>}/>
      <Route path='/Bookmarks' element={<Bookmarks/>}/>
      <Route path='/Lists' element={<Lists/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/More' element={<More/>}/>
      <Route path='/Following' element={<Fetch/>}/>
        <Route path='*'  element={ <Navigate to='/' />}  />
      </Routes>

      {true ? <Right/> : <More/>}
    </div>

  );
}

export default App;
