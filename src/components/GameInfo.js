import axios from "axios";
import "../style/gameinfo.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { searchdata } from "../redux/actions";

const GameInfo = () => {
  const id = useParams().pathId;
  var [resultant, SetResult] = useState("");
  let selectedgames = useSelector((state) => state.selectedgames);
  const dispatcher = useDispatch();

  const moviegetter = (id) => {
    console.log(id);
    console.log(selectedgames);
    var result = selectedgames.filter((game) => game.id == id);
    if (result.length !== 0) {
      console.log("result already exists");
      SetResult(result);
    } else {
      const request = `https://api.rawg.io/api/games/${id}?key=c722bbd26213490ca081fa417a1028ad`;
      axios.get(request).then((response) => {
        const data = response.data;
        SetResult(data);
        console.log(resultant);
        result = [...selectedgames];
        result.push(data);
        dispatcher(searchdata(result));
      });
    }
  };

  useEffect(() => {
    moviegetter(id);
  }, []);
  return (
    <>
      {resultant.length > 0 && (
        <div
          className="game-cover"
          style={{
            background: `radial-gradient(at 50% 50%, rgba(0,0,0,0.7) 20%,
    rgba(21,21,21,1) 70%), url(${resultant[0].background_image})`,
            backgroundPosition: "center",backgroundPositionY:"-3%"
          }}
        >
          <div className="center-grid">
            <div className="left-grid">
              <div className="heading">{resultant[0].name_original}</div>
              <div className="smaller-boxes">
                <div className="smbox-1"><h4>{resultant[0].ratings[0].title.charAt(0).toUpperCase()+resultant[0].ratings[0].title.slice(1)}</h4>
                <p>{resultant[0].ratings.reduce((summation, object) => {
                  // summation +=object.count;
                  return summation + object.count;
                }, 0)} RATINGS</p></div>
                <div className="smbox-2"></div>
                <div className="smbox-3"></div>
              </div>
            </div>
            <div className="right-grid">
              <div className="video-box">v</div>
              <div className="image-box">a</div>
              <div className="image-box">a</div>
              <div className="image-box">a</div>
              <div className="image-box">a</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameInfo;
