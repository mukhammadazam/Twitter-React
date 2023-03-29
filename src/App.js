import LeftSahifa from './twitter/LeftSahifa';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='container'>
      <LeftSahifa />
      <Routes>
        <Route path='/' element={<h1>Home</h1>} />
      </Routes>
    </div>

  );
}

export default App;
