import axios from "axios";
import { useDispatch } from "react-redux";
import { searchdataset } from "../redux/actions";
import {FaBars} from 'react-icons/fa';
import "../style/topnav.css";

const TopNav = () => {
  return (
    <div className="top-nav">
      <h4 style={{ width: "7%" }}>RAWG</h4>
      <SearchBar />
      <div className="top-nav-items">
        {/* <div className="profilepic"></div> */}
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/appointment-reminders--v1.png"
          height={30}
          style={{ marginLeft: "1.4em" }}
        />
      </div>
      <div className="hamburger"><FaBars className="hamburger-icon"/></div>
    </div>
  );
};

const SearchBar = () => {
  const redux_dispatcher = useDispatch();
  const searchinput = (e) => {
    if (e.key === "Enter") {
        var title = e.target.value;
        title = title.replace(" ","+");
      const request =
        `https://api.rawg.io/api/games?key=c722bbd26213490ca081fa417a1028ad&search=${title}`;
        axios.get(request).then(response=>{
            const data = response.data.results;
            console.log(data);
            redux_dispatcher(searchdataset(data));
        })
    }
  };
  return (
    <div className="searchbar">
      <img
        src="https://img.icons8.com/ios-glyphs/60/000000/search--v1.png"
        height={20}
      />
      <input
        type="text"
        placeholder="Pick Your Poison"
        onKeyUp={(e) => searchinput(e)}
      />
    </div>
  );
};

export default TopNav;
