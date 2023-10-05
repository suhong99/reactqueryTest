import './App.css';
import { Route, Routes } from 'react-router-dom';

import Main from './pages/Main';
import Accom from './pages/Accom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/accom" element={<Accom />} />
      </Routes>
    </div>
  );
}

export default App;
