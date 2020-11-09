import React, { Component } from "react";
import "./PlayersList.css";
import Player from "../Player/Player";
import logo from "../../assets/logo/logo@3x.png";
import progress from "../../assets/icons/progress@3x.png";
import notifyMe from "../../assets/icons/notify-me@3x.png";
import deposit from "../../assets/icons/money-bag@3x.png";
import appStore from "../../assets/icons/ios-app@3x.png";
import googlePlay from "../../assets/icons/google-play@3x.png";

class PlayersList extends Component {
  render() {
    return (
      <div className="PlayersList">
        <div className="logo">
          <img src={logo} alt="PlayLine Sports Lotto" />
        </div>

        <div className="wrapper">
          <div className="progress">
            <img src={progress} alt="Progress line of PlayLine" />
          </div>

          <div className="headerText">
            <div className="primaryText">
              <h1>Your Playline is set!</h1>
            </div>
            <div className="secondaryText">
              <h2>Come back @ 7:30pm to track it live!</h2>
            </div>
          </div>

          <div className="proTipText">
            <p>
              Pro Tip: You can manage your PlayLine's until they go live in the
              Upcoming area
            </p>
          </div>

          <div className="playersContainer">
            {this.props.data.players.map((player) => {
              return <Player player={player} key={player.last_name} />;
            })}
          </div>

          <div className="mainBtns">
            <button className="notifyMeBtn">
              <img src={notifyMe} alt="Notify me and subscribe" />
              <p>Notify me</p>
            </button>
            <button className="depositBtn">
              <img src={deposit} alt="Deposit money" />
              <p>Deposit</p>
            </button>
          </div>

          <div className="appStoreBtns">
            <div className="downloadTheApp">
              <p>Download the app</p>
            </div>
            <button className="appStoreBtn">
              <img
                src={appStore}
                alt="Download app from Apple AppStore (iOS)"
              />
            </button>
            <button className="googlePlayBtn">
              <img
                src={googlePlay}
                alt="Download app from Google Play Store (Android)"
              />
            </button>
          </div>
        </div>

        <div className="nav">
          <ul>
            <li>
              <a href="#">About |</a>
            </li>
            <li>
              <a href="#">PLB Bonus |</a>
            </li>
            <li>
              <a href="#">Contact |</a>
            </li>
            <li>
              <a href="#">Security |</a>
            </li>
            <li>
              <a href="#">Responsible Play |</a>
            </li>
            <li>
              <a href="#">Privacy |</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PlayersList;
