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
          
      <a target= "_blank" className="linkWithoutColor" href="https://rafaelaumbelino.github.io/Project1_Game_January23/">
      <div className="item">
       <img src={Game} alt="" />
       <p>Avoid Game</p>
         </div>
      </a>

      <a target= "_blank" className="linkWithoutColor" href="https://andrelisboapt.github.io/Wizzards_and_Demons/">
          <div className="item">
            <img src={Game} alt="" />
            <p>2-D Shooter Game</p>
          </div>
          </a>
         <a target="_blank" className="linkWithoutColor" href="https://recipe-generator.cyclic.app">
          <div className="item">
            <img src={Friends} alt="" />
            <p>Diner Recepies</p>
          </div>
          </a>

          <a target="_blank" className="linkWithoutColor" href="https://cryptohacker.cyclic.app/">
           <div className="item">
            <img src={Fund} alt="" />
            <p>Cryptocurrencies Market</p>
          </div>
          </a>
          
          
          <div className="item">
            <img src={Map} alt="" />
            <p>Contact the team: <a className="namesWithoutColor" target="_blank" href="https://www.linkedin.com/in/andrelisboapt/" >André</a> & <a className="namesWithoutColor" target="_blank" href="https://www.linkedin.com/in/tomas-belmar/" >Tomás</a></p>
          </div>
        
        </div>
        <hr />

      </div>
    </div>
  );
};

export default LeftBar;
