import { Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./Component/Login";
import Registration from "./Component/Registration";

function App() {
  return (
    <>
       <Routes>
        <Route path="/login" index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
