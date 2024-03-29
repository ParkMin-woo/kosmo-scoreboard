import React from 'react';
import './App.css';
import {Header} from "./Header";
import {Player} from "./Player";

class App extends React.Component {
  state = {
    players: [
      {name: 'LDK', score: 30, id: 1},
      {name: 'HONG', score: 40, id: 2},
      {name: 'KIM', score: 50, id: 3},
      {name: 'PARK', score: 60, id: 4}
    ]
  }
  render() {
    return (
      <div className="scoreboard">
        <Header title="My Scoreboard" totalPlayers={11} />

        {
          this.state.players.map((player) => {
            return (
              <Player name={player.name} score={player.score} id={player.id} key={player.id}
                // 2. props로 콜백 펑션을 전달
                      removePlayer={this.handleRemovePlayer} />
            )
          })
        }
      </div>
    );
  }
  // 1. 콜백 펑션 정의
  handleRemovePlayer = (id) => {
    console.log('handleRemovePlayer: ', id);
    this.setState(prevState => ({
      players: prevState.players.filter(player => player.id !== id)
    }));
  }
}

export default App;
