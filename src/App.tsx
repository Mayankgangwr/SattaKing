import './App.css';
import "./custom.scss";
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import LiveChart from './Components/Charts/LiveCharts/LiveChart';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/livechart" element={<LiveChart />} />
  
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
