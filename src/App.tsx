import './App.css';
import "./custom.scss";
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import GameChart from './Components/Charts/GameChart/GameChart';
import YearChart from './Pages/YearChart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/gamechart/:gamename" element={<GameChart />} />
            <Route path="/yearchart/:year" element={<YearChart />} />
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
