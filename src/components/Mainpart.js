import "../style/Mainpart.css"
import CardPanel from "./CardPanel";
const MainPart = () => {
    return ( 
    <>
        <div style={{display:"flex",flexDirection:"column",paddingBottom:"100px"}}>
            <Header/>
            <CardPanel/>
        </div>
    </> );
}

const Header = () => {
    return ( 
        <div className="header">
        <h1>New And Trending</h1>
        <p>Based on player counts and release date</p>
        <div className="shiny-header-subtitle">
            <h3>Jump-start your library with games from Steam, PlayStation, Xbox or GOG. The more complete your profile is, the better it shows your interests.</h3>
            <button className="shiny"><p>Import Games</p></button>
        </div>
    </div>
     );
}
 
 
export default MainPart;