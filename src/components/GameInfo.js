import axios from "axios";
import "../style/gameinfo.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { searchdata } from "../redux/actions";
import { Player } from "video-react";
import HTMLReactParser from "html-react-parser";

const GameInfo = () => {
  const id = useParams().pathId;
  var [resultant, SetResult] = useState("");
  var [SS, SetSS] = useState();
  var [trailer, Settrailer] = useState();
  const [description,Setdescription] = useState("");
  let selectedgames = useSelector((state) => state.selectedgames);
  const dispatcher = useDispatch();
  const [date, SetDate] = useState();

  const moviegetter = (id) => {
    var result = selectedgames.filter((game) => game.id == id);
    if (result.length !== 0) {
      console.log("result already exists, it is:");
      return SetResult(result);
    } else {
      const request = `https://api.rawg.io/api/games/${id}?key=c722bbd26213490ca081fa417a1028ad`;
      axios.get(request).then((response) => {
        const data = response.data;
        SetResult(data);
        // console.log(resultant);
        result = [...selectedgames];
        result.push(data);
        dispatcher(searchdata(result));
        return;
      });
    }
  };

  useEffect(() => {
    moviegetter(id);
    // return SetResult("");
  }, []);
  useEffect(() => {
    const dateObj = new Date(resultant.released);
    const month = dateObj.toLocaleString("en-us", { month: "long" });
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const temp = month + " " + day + ", " + year;
    // var parser = new DOMParser();
    // var doc = parser.parseFromString(resultant.description, 'text/html');
    SetDate(temp);
    const screenshot_request = `https://api.rawg.io/api/games/${id}/screenshots?key=c722bbd26213490ca081fa417a1028ad`;
    const trailer_request = `https://api.rawg.io/api/games/${id}/movies?key=c722bbd26213490ca081fa417a1028ad`;
    axios.get(screenshot_request).then((response) => {
      const data = response.data.results;
      SetSS(data);
    });
    axios.get(trailer_request).then((response) => {
      const data = response.data.results;
      Settrailer(data);
    });
    console.log(resultant);
  }, [resultant]);
  return (
    <>
      {resultant && SS && (
        <div
          className="game-cover"
          style={{
            background: `radial-gradient(at 50% 50%, rgba(0,0,0,0.7) 20%,
    rgba(21,21,21,1) 70%), url(${resultant.background_image})`,
            backgroundPosition: "center",
            backgroundPositionY: "-3%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="center-grid">
            <div className="left-grid">
              <div className="heading">
                <div className="header-upperpart">
                  <p className="release-tag">{date}</p>
                  <p className="avg-playtime">
                    AVERAGE PLAYTIME: {resultant.playtime} HOURS
                  </p>
                </div>
                <h4>{resultant.name_original}</h4>
              </div>
              <div className="smaller-boxes">
                <div className="smbox-1">
                  <h4>
                    {resultant.ratings[0].title.charAt(0).toUpperCase() +
                      resultant.ratings[0].title.slice(1)}
                  </h4>
                  <p>
                    {resultant.ratings.reduce((summation, object) => {
                      return summation + object.count;
                    }, 0)}{" "}
                    RATINGS
                  </p>
                </div>
                <div className="smbox-2">
                  <h4>
                    {resultant.rating}/{resultant.rating_top}
                  </h4>
                  <p>FANBASE RATING</p>
                </div>
                <div className="smbox-3"></div>
              </div>
              <div className="About">
                <h4>About</h4>
                {HTMLReactParser(resultant.description)}
              </div>
              <div className="Rest-info">
                <div className="rows">
                  <div className="information">
                    Platforms:
                    <p>{resultant.platforms.map(plat => {
                      return plat.platform.name + ","
                    })}</p>
                  </div>
                  <div className="information">
                    MetaScore:
                    <p>{resultant.metacritic}</p>
                  </div>
                </div>
                <div className="rows">
                <div className="information">
                    Genre:
                    <p>{resultant.genres.map(genre=>{
                      return genre.name +","
                    })}</p>
                  </div>
                <div className="information">
                    Release Date:
                    <p>{date}</p>
                  </div>
                </div>
                <div className="rows">
                <div className="information">
                    Developer:
                    <p>{resultant.developers.map(dev=> {return dev.name+","})}</p>
                  </div>
                <div className="information">
                    Publisher:
                    <p>{resultant.publishers.map(pubs=> {return pubs.name+","})}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="right-grid">
              <div
                className="video-box"
                style={{ backgroundImage: `url(${SS[0].image})` }}
              ></div>
              <div className="rows">
                <div
                  className="image-box"
                  style={{ backgroundImage: `url(${SS[1].image})` }}
                ></div>
                <div
                  className="image-box"
                  style={{ backgroundImage: `url(${SS[2].image})` }}
                ></div>
              </div>
              <div className="rows" style={{ marginTop: "10px" }}>
                <div
                  className="image-box"
                  style={{ backgroundImage: `url(${SS[3].image})` }}
                ></div>
                <div
                  className="image-box"
                  style={{ backgroundImage: `url(${SS[4].image})` }}
                ></div>
              </div>
              <div className="empty" style={{height:"50%"}}></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GameInfo;
