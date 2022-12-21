import { useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Image from "./components/Image";
import Info from "./components/Info";
import Interests from "./components/Interests";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="container">
        <div className="first-box">
          <div className="card">
            <Image />
            <Info />
            <About />
            <Interests />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
