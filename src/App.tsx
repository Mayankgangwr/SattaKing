import './App.css';
import "./custom.scss";
import Header from './Components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DarkAdsCard from './Components/AdsCard/Dark';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="/products" element={<DarkAdsCard />} />
  
          </Route>

        </Routes>
      </BrowserRouter >
    </>
  );
}

export default App;
