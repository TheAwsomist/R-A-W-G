import axios from "axios";
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
    <div>
      <p></p>
    </div>
  );
};

export default GameInfo;
