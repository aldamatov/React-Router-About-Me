import "./styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./components/Homepage";
import MyChoices from "./components/MyChoices";
import Tools from "./components/Tools";
import WebsitesToFollow from "./components/WebsitesToFollow";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>About Me</h1>
        <Navbar />
        <Routes>
          <Route path="/homepage" exact element={<Homepage />} />
          <Route path="/tools" element={<Tools />} />
          <Route path="/mychoices" element={<MyChoices />} />
          <Route path="/websitestofollow" element={<WebsitesToFollow />} />
        </Routes>
      </div>
    </Router>
  );
}
