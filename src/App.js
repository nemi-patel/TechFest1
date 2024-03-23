import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";
import Navbar from "./Component/Navbar";
import BackgroundVideo from "./Component/Background";
import Home from "./Component/Home";
import Game from "./Component/Game";
import Footer from "./Component/Footer";
import Gallary from "./Component/Gallary";

function App() {
  return (
    <>
      {/* <Navbar/> */} 
      <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/navbar" index element={<Navbar />} />
        <Route path="/background" element={<BackgroundVideo/>} /> 
        <Route path="/home" element={<Home/>} />
        <Route path="/game" element={<Game/>} />
        <Route path="/gallary" element={<Gallary/>} />
      </Routes>
      <Footer/>
      {/* <Login/> */}
      {/* <Navbar/> */}
    </>
  );
}

export default App;
