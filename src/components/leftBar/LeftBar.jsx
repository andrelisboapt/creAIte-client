import "./leftBar.scss";
import Friends from "../../assets/1.png";
import Map from "../../assets/map.png";
import Fund from "../../assets/13.png";
import Game from "../../assets/7.png";


const LeftBar = () => {

  

  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          
          <div className="item">
            <img src={Game} alt="" />
            <span>Avoide Game</span>
          </div>
          <div className="item">
            <img src={Game} alt="" />
            <span>Game</span>
          </div>
          <div className="item">
            <img src={Friends} alt="" />
            <span>Diner Recepies</span>
          </div>
           <div className="item">
            <img src={Fund} alt="" />
            <span>Digital Coins</span>
          </div>
          <div className="item">
            <img src={Map} alt="" />
            <span>Contact the web team</span>
          </div>
        </div>
        <hr />

      </div>
    </div>
  );
};

export default LeftBar;
