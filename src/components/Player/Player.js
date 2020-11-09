import React, { Component } from "react";
import "./Player.css";
// import Davis from "../../assets/headshots/Davis.png";
// import Gordon from "../../assets/headshots/Gordon.png";
// import James from "../../assets/headshots/James.png";
// import Leonard from "../../assets/headshots/Leonard.png";
// import Lowry from "../../assets/headshots/Lowry.png";
// import Russell from "../../assets/headshots/Russell.png";
// import Siakam from "../../assets/headshots/Siakam.png";

class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="Player">
        <ul>
          <li>
            <div className="headshots">
              <img
                src={`/assets/headshots/${player.last_name}.png`}
                // I used public folder intead of importing to keywords
                // src={process.env.PUBLIC_URL +  `/assets/headshots/${player.last_name}.png`}
                alt={`Player ${player.last_name}`}
              />
            </div>
            <div className="name">{player.last_name}</div>
            <div className="points">
              <div className="pointsCircleBg">
                <div className="pointsCircle">{player.points}</div>
              </div>
            </div>
            <div className="pts">pts</div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Player;
