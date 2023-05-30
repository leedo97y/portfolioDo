import { Routes, Route } from 'react-router-dom';
import './App.css';

import Portfolio from './pages/Portfolio';
import TomutoPage from './pages/TomutoPage';
import TripmatchPage from './pages/TripmatchPage';
import RetfilxPage from './pages/RetfilxPage';
import FriedEggPage from './pages/FriedEggPage';
import WeatherPage from './pages/WeatherPage';

function App() {
  return (
    <div className='w-full h-screen box-border'>
      <Routes>
        <Route path='/' element={<Portfolio />} />
        <Route path='/tomuto' element={<TomutoPage />} />
        <Route path='/tripmatch' element={<TripmatchPage />} />
        <Route path='/retfilx' element={<RetfilxPage />} />
        <Route path='/friedegg' element={<FriedEggPage />} />
        <Route path='/weather' element={<WeatherPage />} />
      </Routes>
    </div>
  );
}

export default App;
