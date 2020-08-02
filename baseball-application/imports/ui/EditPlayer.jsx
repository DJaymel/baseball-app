import React, { Component } from 'react';

export default class EditPlayer extends Component {
  showTeamStats() {
    this.props.showTeamStats();
  }

  editPlayer(event) {
    event.preventDefault();

    let player = {
      _id: this.props.currentPlayer._id,
      name: this.refs.name.value,
      team: this.refs.team.value,
      fielding: this.refs.fielding.value,
      vision: this.refs.vision.value,
      reaction: this.refs.reaction.value,
      battingPower: this.refs.battingPower.value,
      armStrength: this.refs.armStrength.value,
      armAccuracy: this.refs.armAccuracy.value,
      speed: this.refs.speed.value,
      stealing: this.refs.stealing.value,
      durability: this.refs.durability.value,
      notes: this.refs.notes.value,
      createdAt: new Date(),
      owner: Meteor.userId(),
    }

    Meteor.call('updatePlayer', player, (error) =>{
      if(error) {
        alert("Something went wrong: " + error.reason);
      } else {
        alert("Player updated");
        this.showTeamStats();
      }
    });
  }

  render() {
    const currentPlayer = this.props.currentPlayer;

    return (
      <div className="row">
        <form className="col s12" onSubmit={this.editPlayer.bind(this)} >
          <h3>Add New Player</h3>

          <div className="row">
            <div className="input-field col s6">
              <input placeholder="Name" ref="name" type="text" className="validate" defaultValue={currentPlayer.name} />
            </div>
            <div className="input-field col s6">
              <input placeholder="Team" ref="team" type="text" className="validate" defaultValue={currentPlayer.team} />
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <h5>Fielding</h5>
              <select className="browser-default" ref="fielding">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Vision</h5>
              <select className="browser-default" ref="vision">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Reaction</h5>
              <select className="browser-default" ref="reaction">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Batting Power</h5>
              <select className="browser-default" ref="battingPower">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Arm Strength</h5>
              <select className="browser-default" ref="armStrength">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Arm Accuracy</h5>
              <select className="browser-default" ref="armAccuracy">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Speed</h5>
              <select className="browser-default" ref="speed">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Stealing</h5>
              <select className="browser-default" ref="stealing">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
            <div className="col s6">
              <h5>Durability</h5>
              <select className="browser-default" ref="durability">
                <option value="0">0 - Hasn't Demonstrated Skills</option>
                <option value="1">1 - Needs Improvement</option>
                <option value="2">2 - Skill Acquired</option>
                <option value="3">3 - Great Skills/Could Teach</option>
              </select>
            </div>
          </div>

          <div className="row">
            <div className="col s6">
              <textarea placeholder="Notes" ref="notes" className="materialize-textarea" />
            </div>
            <div className="col s6">
              <button className="btn waves-effect waves-light light-blue darken-3" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
            </div>
          </div>

        </form>
      </div>
    )
  }
}
