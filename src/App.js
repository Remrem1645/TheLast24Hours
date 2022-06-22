import './App.css';
import { Route, Routes } from 'react-router-dom';
import Mainpage from './pages/MainPage';
import SettingsPage from './pages/SettingsPage'
import About from './pages/About';


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
