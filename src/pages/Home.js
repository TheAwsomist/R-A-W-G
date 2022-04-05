import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MainPart from "../components/Mainpart";
import "../style/Home.css"
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import GameInfo from "../components/GameInfo";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Router>
          <div class="mainportion">
          <Sidebar/>
            <Switch>
              <Route path="/" exact>
                <MainPart/>
              </Route>
              <Route path="/:pathId">
                <GameInfo/>
              </Route>
            </Switch>
          </div>
      </Router>
    </div>
  );
};

export default Home;
