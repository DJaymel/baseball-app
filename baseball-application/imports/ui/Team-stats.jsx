import React, { Component } from 'react';
import { Radar } from 'react-chartjs-2';
import Divider from 'material-ui/Divider';

export default class TeamStats extends Component {

  render() {
    const players = this.props.players;
    const numOfPlayers = players.length;

    const fielding = Math.round((players.reduce((fielding, player) => {
      return fielding + player.fielding;
    }, 0) / (3 * numOfPlayers)) * 100);
    const vision = Math.round((players.reduce((vision, player) => {
      return vision + player.vision;
    }, 0) / (3 * numOfPlayers)) * 100);
    const reaction = Math.round((players.reduce((reaction, player) => {
      return reaction + player.reaction;
    }, 0) / (3 * numOfPlayers)) * 100);
    const battingPower = Math.round((players.reduce((battingPower, player) => {
      return battingPower + player.battingPower;
    }, 0) / (3 * numOfPlayers)) * 100);
    const armStrength = Math.round((players.reduce((armStrength, player) => {
      return armStrength + player.armStrength;
    }, 0) / (3 * numOfPlayers)) * 100);
    const armAccuracy = Math.round((players.reduce((armAccuracy, player) => {
      return armAccuracy + player.armAccuracy;
    }, 0) / (3 * numOfPlayers)) * 100);
    const speed = Math.round((players.reduce((speed, player) => {
      return speed + player.speed;
    }, 0) / (3 * numOfPlayers)) * 100);
    const stealing = Math.round((players.reduce((stealing, player) => {
      return stealing + player.stealing;
    }, 0) / (3 * numOfPlayers)) * 100);
    const durability = Math.round((players.reduce((durability, player) => {
      return durability + player.durability;
    }, 0) / (3 * numOfPlayers)) * 100);
    const data = {
      labels: ['Fielding', 'Vision', 'Reaction', 'Batting Power', 'Arm Strength', 'ArmAccuracy', 'Speed', 'Stealing', 'Durability'],
      datasets: [
        {
          label: 'In % of max possible',
          backgroundColor: 'rgba(143,202,249,0.2)',
          borderColor: 'rgba(12,71,161,1)',
          pointBackgroundColor: 'rgba(12,71,161,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(12,71,161,1)',
          data: [fielding, vision, reaction, battingPower, armStrength, armAccuracy, speed, stealing, durability]
        },
      ]
    };

    const defense = Math.round((fielding + reaction + speed + armAccuracy + armStrength)/5);
    const offense = Math.round((vision + battingPower + stealing + durability)/4);
    const total = Math.round((fielding + reaction + speed + armAccuracy + armStrength + vision + battingPower + stealing + durability)/9);

    return (
      <div>
        <h2>Team Stats</h2>
        <div className="row">
          <div className="col s12 m7">
            <Radar data={data}
            width={500}
            height={500}
            option={{
              maintainAspectRatio: false
            }}/>
          </div>
          <div className="col s12 m5">
            <h4>Scores in % of max possible</h4>
            <Divider />
            <h4>Team's offense: {offense}%</h4>
            <h4>Team's defense: {defense}%</h4>
            <h4>Team's total: {total}%</h4>
            <Divider />
            <h4>Number of players: {numOfPlayers}</h4>
          </div>
        </div>
      </div>
    );
  }
}
