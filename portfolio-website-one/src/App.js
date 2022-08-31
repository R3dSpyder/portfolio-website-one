import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import ForumBoard from "./components/ForumBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/forum" index element={<ForumBoard />} />
      </Routes>
    </div>
  );
}

export default App;
