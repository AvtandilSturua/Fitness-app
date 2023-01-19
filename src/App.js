import "./App.css";
import Nutrition from "./Components/Nutrition.js";
import Exercises from "./Components/Exercises.js";
import Navbar from "./Components/NavigationBar.js";
import MainInfo from "./Components/MainInfo.js";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainInfo />}></Route>
          <Route path="/exercises" element={<Exercises />}></Route>
          <Route path="/nutrition" element={<Nutrition />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
