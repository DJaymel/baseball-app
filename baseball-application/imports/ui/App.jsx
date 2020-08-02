import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import { List } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import { withTracker } from 'meteor/react-meteor-data';
import { Link } from 'react-router-dom';

import { Players } from '../api/players';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';

import AccountsWrapper from './AccountsWrapper';
import EditPlayer from './EditPlayer';

const tempPlayer = {
  name: "John Lewis",
  team: "Atlanta Braves",
  fielding: 3,
  vision: 3,
  reaction: 3,
  battingPower: 3,
  armStrength: 3,
  armAccuracy: 3,
  speed: 3,
  stealing: 3,
  durability: 3,
  notes: "The G.O.A.T.",
}

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPlayer: tempPlayer,
      showEditPlayer: false,
    };
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);
    this.showEditForm = this.showEditForm.bind(this);
    this.showTeamStats = this.showTeamStats.bind(this);
  }

  showEditForm() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showTeamStats() {
    this.setState({
      showEditPlayer: true,
    });
  }

  showForm() {
    if(this.state.showEditPlayer === true) {
      return ( <EditPlayer currentPlayer={this.state.currentPlayer}
        showTeamStats={this.showTeamStats} />);
    } else {
      return ( <TeamStats players={this.props.players}/> );
    }
  }

  renderPlayers() {
    return this.props.players.map((player) => (
      <TeamList key={player._id} player={player} updateCurrentPlayer={this.updateCurrentPlayer}/>
    ));
  }

  updateCurrentPlayer(player) {
    this.setState({
      currentPlayer: player,
    });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Baseball Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            showMenuIconButton={false}
            style={{backgroundColor: '#0277BD'}}>
            <AccountsWrapper />
          </AppBar>
          <div className="row">
            <div className="col s12 m7"><Player player={this.state.currentPlayer} showEditForm={this.showEditForm} /></div>
            <div className="col s12 m5">
              <h2>Team List</h2><Link to="/new" className="waves-effect waves-light btn light-blue darken-3">Add Player</Link>
              <br/>
              <br/>
              <Divider/>
                <List>
                  {this.renderPlayers()}
                </List>
              <Divider/>
            </div>
          </div>
          <div className="row">
          <div className="col s12">
            <br/>
            <Divider/>
              {this.showForm()}
            <Divider/>
          </div>
          </div>
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  players: PropTypes.array.isRequired,
};

export default withTracker(() => {
  Meteor.subscribe('players');
  const user = Meteor.userId();

  return {
    players: Players.find({ owner: user }, {sort: { name: 1 }}).fetch(),
  };
})(App);
