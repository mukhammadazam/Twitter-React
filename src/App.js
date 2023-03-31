import LeftSahifa from './twitter/LeftSahifa';
import { Routes, Route, Navigate } from 'react-router-dom';
import Right from './right/Right';
import Home from './conbanent/Home';
import Explore from './explore/Explore';
import './App.css'
function App() {
  return (
    <div className='container pt-3 d-flex justify-content-lg-between'>
      <LeftSahifa />
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Explore' element={<Explore/>}/>
        <Route path='*'  element={ <Navigate to='/' />}  />
      </Routes>
      <Right/>
    </div>

  );
}

export default App;
