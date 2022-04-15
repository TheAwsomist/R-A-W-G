import axios from "axios";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { calldata, clearsearch } from "../redux/actions";
import "../style/sidebar.css";
import { AiTwotoneStar,AiTwotoneFire, AiFillTrophy,AiFillCrown } from "react-icons/ai";
import {BsFillCalendarDateFill} from "react-icons/bs";
import {FaFastForward} from "react-icons/fa";
import {ImStatsBars} from "react-icons/im";


const Sidebar = () => {
  const dispatcher = useDispatch();
  const returner = () => {
    dispatcher(clearsearch());
  };

  return (
    <div className="sidebar">
      <Link to="/">
        <p className="sidebar-title clickable" onClick={() => returner()}>
          Home
        </p>
      </Link>
      <p className="sidebar-title clickable">Reviews</p>
      <p className="sidebar-title">New Releases</p>
      <div style={{ marginTop: "28.8px" }}>
        <SidebarItems title="Last 30 Days" path={<AiTwotoneStar className='icon'/>} />
        <SidebarItems title="This Week" path={<AiTwotoneFire className='icon'/>} />
        <SidebarItems title="Next Week" path={<FaFastForward className='icon'/>} />
        <SidebarItems title="Release Calender" path={<BsFillCalendarDateFill className='icon'/>} />
      </div>
      <p className="sidebar-title">Top</p>
      <div style={{ marginTop: "28.8px" }}>
        <SidebarItems title="Best Of The Year" path={<AiFillTrophy className='icon'/>} />
        <SidebarItems title="Popular In 2021" path={<ImStatsBars className='icon'/>} />
        <SidebarItems title="All time top 250" path={<AiFillCrown className='icon'/>}/>
      </div>
    </div>
  );
};

const SidebarItems = ({ icon, title, path }) => {
  return (
    <div className="sidebar-item">
      <span className="sidebar-icon">
          {path}
      </span>
      <p style={{ paddingLeft: "10px" }}>{title}</p>
    </div>
  );
};

export default Sidebar;
