import "../style/CardPanel.css";
import PC from "../assets/pc.svg";
import PS4 from "../assets/playstation.svg";
import Xbox from "../assets/xbox.svg";
import axios from "axios";
import { useEffect } from "react";
import { calldata } from "../redux/actions";
import { useDispatch } from "react-redux";

const CardPanel = () => {

const dispatcher = useDispatch();

const getter = () =>{
  let data=null;
    axios.get("https://api.rawg.io/api/games?key=c722bbd26213490ca081fa417a1028ad").then(response =>{
        data = response.data.results;
        // console.log(data);
    });
    return data;
}

useEffect(()=>dispatcher(()=>calldata(getter())),[]);
  return (
    <div style={{display:"flex",flexWrap:"wrap",columnGap:"20px",rowGap:"20px",width:"85vw"}}>
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
      <CardShort />
    </div>
  );
};

const CardShort = () => {
  return (
    <div className="cardshort">
      <img className="poster" src="https://media.rawg.io/media/crop/600/400/games/fb5/fb5e0fdb1f6bb0e8b5da5d08bb83a5fc.jpg" alt=""/>
      <div className="info">
        <div className="icons">
          <img src={PC} alt="" width={20} height={20}/>
          <img src={PS4} alt="" width={20} height={20}/>
          <img src={Xbox} alt="" width={20} height={20}/>
        </div>
        <h2>Vampire: The Masquerade - Bloodlines 2</h2>
        <div className="tag">+ 494</div>
      </div>
    </div>
  );
};

export default CardPanel;
