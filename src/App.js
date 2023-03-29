import LeftSahifa from './twitter/LeftSahifa';
import { Routes, Route } from 'react-router-dom';
import Right from './right/Right';
function App() {
  return (
    <div className='container pt-3 d-flex justify-content-lg-between'>
      <LeftSahifa />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
      <Right/>
    </div>

  );
}

export default App;
