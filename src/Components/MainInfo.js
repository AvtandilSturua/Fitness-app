import gympic from "./Gallery/gym.png";
import "./MainInfo.css";
const MainInfo = () => {
  return (
    <>
      <div className="main">
        <div className="backgroundtext">
          <h1>
            WORKOUT
            <br />
            WITH ME
          </h1>
        </div>
        <main>
          <div className="text">
            <h2>Look in the mirror. That's your competition</h2>
          </div>
          <div className="photo">
            <img src={gympic} />
          </div>
        </main>
        <h3>@created by avto Sturua</h3>
      </div>
    </>
  );
};
export default MainInfo;
