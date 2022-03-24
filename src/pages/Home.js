import Sidebar from "../components/Sidebar";
import TopNav from "../components/TopNav";
import MainPart from "../components/Mainpart";
import "../style/Home.css"

const Home = () => {
  return (
    <div>
      <TopNav />
      <div class="mainportion">
        <Sidebar />
        <MainPart/>
      </div>
    </div>
  );
};

export default Home;
