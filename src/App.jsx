import { useEffect, useMemo, useState } from "react";
import "./App.css";
import HoverGallery from "./component/HoverGallery";
import Header from "./component/Header";

function App() {
  return (
    <div className="h-screen">
      <div>
        <Header />
        <HoverGallery />l
      </div>
    </div>
  );
}
export default App;
