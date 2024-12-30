import "./App.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="md:w-[4em] border-r-[1px] border-ra h-screen"></div>
        <div className="flex-1 max-h-[calc(100vh-105px)] overflow-scroll scrollbar_none">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <div className="md:w-[4em] border-l-[1px] border-ra h-screen"></div>
      </div>
    </>
  );
}

export default App;
