import React, { Component } from "react";
import "./App.css";
// import {Button} from '@material-ui/core';
import PlayerList from "../PlayersList/PlayersList";
import { playlineAPI } from "../../util/PlaylineAPI";
import { CircularProgress } from "@material-ui/core";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      players: null,
    };
  }

  componentDidMount() {
    this.getPlayers();
  }

  getPlayers = async () => {
    this.setState({ isLoaded: true });
    try {
      const players = await playlineAPI.getPlayers();
      this.setState({ players });
    } catch (error) {
      this.setState({ error });
    }
    this.setState({ isLoaded: false });
  };

  render() {
    const { error, isLoaded } = this.state;
    if (error) {
      return <div> Error: {error.message} </div>;
    } else {
      return (
        <div className="App">
          {isLoaded ? (
            <div className="progress">
              <CircularProgress style={{ color: "#f8f8f8", justifySelf: "center"}} size={150} />
            </div>
          ) : (
            this.state.players && <PlayerList data={this.state.players} />
          )}
        </div>
      );
    }
  }
}

export default App;