import { useState } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const handleClick = () => {
    setOpenNav((current) => !current);
  };
  return (
    <>
      <div className="navhead">
        <nav>
          <div className="logo">
            <h1>Sinaspdom</h1>
          </div>
          <div className="navigation">
            <i onClick={handleClick} class="fa-solid fa-bars"></i>
          </div>
          <div className={openNav ? "openNavmenu" : "navmenu"}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/exercises">Exercises</Link>
              </li>
              <li>
                <Link to="/nutrition">Food nutrition</Link>
              </li>
            </ul>
            <i onClick={handleClick} class="fa-solid fa-xmark"></i>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Navbar;
