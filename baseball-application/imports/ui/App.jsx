import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

export default class App extends Component{
  getPlayers() {
    return [
      {
        _id: 1,
        team: "New York Mets",
        name: "Robinson Cano",
        fielding: 81,
        vision: 78,
        reaction: 72,
        battingPower: 119,
        armStrength: 74,
        armAccuracy: 87,
        speed: 51,
        stealing: 31,
        durability: 98,
      },
      {
        _id: 2,
        team: "Houston Astros",
        name: "Jose Altuve",
        fielding: 67,
        vision: 88,
        reaction: 74,
        battingPower: 54,
        armStrength: 75,
        armAccuracy: 80,
        speed: 78,
        stealing: 80,
        durability: 84,
      },
      {
        _id: 3,
        team: "Unknown",
        name: "Ozzie Albies",
        fielding: 67,
        vision: 77,
        reaction: 78,
        battingPower: 119,
        armStrength: 49,
        armAccuracy: 92,
        speed: 73,
        stealing: 33,
        durability: 98,
      }
    ];
  }

  renderPlayers() {
    return this.getPlayers().map((player) => (
      <TeamList key={player._id} player={player} />
    ));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Baseball Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false} />
          <div className="row">
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5">
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
            <div className="col s12 m5"><TeamStats/></div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}
