import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import TabOpen from './pages/TabOpen';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/tabopen" element={<TabOpen />} />
      </Routes>
    </div>
  );
}

export default App;
