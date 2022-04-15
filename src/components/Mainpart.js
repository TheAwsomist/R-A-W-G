import { InputLabel, Select, MenuItem } from "@mui/material";
import "../style/Mainpart.css";
import CardPanel from "./CardPanel";
import BasicSelect from "./Order";
const MainPart = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          paddingBottom: "100px",
          width:"82%"
        }}
      >
        <Header />
        <CardPanel />
      </div>
    </>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h1>New And Trending</h1>
      <p>Based on player counts and release date</p>
      
      <BasicSelect/>

      <div className="shiny-header-subtitle">
        <h3 style={{ fontSize: "1rem" }}>
          Jump-start your library with games from Steam, PlayStation, Xbox or
          GOG. The more complete your profile is, the better it shows your
          interests.
        </h3>
        <button className="shiny">
          <p>Import Games</p>
        </button>
      </div>
    </div>
  );
};

export default MainPart;
