import "../style/CardPanel.css";
import PC from "../assets/pc.svg";
import PS4 from "../assets/playstation.svg";
import Xbox from "../assets/xbox.svg";
import axios from "axios";
import { useEffect, useState } from "react";
import { calldata } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const CardPanel = () => {

const dispatcher = useDispatch();
const games = useSelector((state)=>state.games);

const getter = () =>{
  let data;
    axios.get("https://api.rawg.io/api/games?key=c722bbd26213490ca081fa417a1028ad").then(response =>{
        data = response.data.results;
        console.log(data);
        console.log(data[0].genres.map(genre => genre.name));
        dispatcher(calldata(data));
    });
}


useEffect(()=>getter(),[]);
  return (
    <div style={{display:"flex",flexWrap:"wrap",columnGap:"20px",rowGap:"20px",width:"85vw"}}>
     {/* <div className="cardpanel"> */}
      {games && games.map(game => {
        return <CardShort title={game.name} poster = {game.background_image} released = {game.released} genres={game.genres} top = {game.rating_top}/>
      })}
    </div>
  );
};

const CardShort = ({title,poster,released,genres,top}) => {
  return (
    <div className="placer">
      <div className="cardshort">
        <img className="poster" src={poster} alt=""/>
        <div className="info">
          <div className="icons">
            <img src={PC} alt="" width={20} height={20}/>
            <img src={PS4} alt="" width={20} height={20}/>
            <img src={Xbox} alt="" width={20} height={20}/>
          </div>
          <h2>{title}</h2>
          <div className="tag">+ 494</div>
          <div className="moreinfo">
            <p style={{color:"grey"}}>Genre:</p>
            <p style={{width:"fit-content"}}>{genres.map(genre => {return genre.name+", "})}</p>
          </div>
          <div className="moreinfo">
            <p style={{color:"grey"}}>Release Date:</p>
            <p>{released}</p>
          </div>
          <div className="moreinfo">
            <p style={{color:"grey"}}>Chart:</p>
            <p>#{top} In 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPanel;
