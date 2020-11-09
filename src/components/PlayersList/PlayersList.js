import React, { Component } from "react";
import "./PlayersList.css";
import Player from "../Player/Player";
import logo from "../../assets/logo/logo@3x.png";

class PlayersList extends Component {
  render() {
    return (
      <div className="PlayersList">
        <div className="logo">
          <img src={logo} alt="PlayLine Sports Lotto" />
        </div>

        <div className="wrapper">
          <div className="progress"></div>

          <div className="headerText">
            <div className="primaryText"></div>
            <div className="secondaryText"></div>
          </div>

          <div className="proTipText"></div>

          <div className="playersContainer">
            {this.props.data.players.map((player) => {
              return <Player player={player} key={player.last_name} />;
            })}
          </div>

          <div className="mainBtns">
            <div className="notifyMeBtn"></div>
            <div className="depositBtn"></div>
          </div>

          <div className="appStoreBtns">
            <div className="downloadTheApp"></div>
            <div className="appStoreBtn"></div>
            <div className="googlePlayBtn"></div>
          </div>
        </div>

        <div className="nav"></div>
      </div>
    );
  }
}

export default PlayersList;
