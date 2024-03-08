import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Component/Login";

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" index element={<Login />} />
        <Route path="/registration" element={<Registration />} />
      </Routes> */}
      <Login/>
    </>
  );
}

export default App;
