import LeftSahifa from './twitter/LeftSahifa';
import { Routes, Route } from 'react-router-dom';
import Right from './right/Right';
import Home from './conbanent/Home';
function App() {
  return (
    <div className='container pt-3 d-flex justify-content-lg-between'>
      <LeftSahifa />
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Right/>
    </div>

  );
}

export default App;
