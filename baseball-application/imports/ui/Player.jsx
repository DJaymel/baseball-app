import React, { Component } from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, lightBlue800, lightBlue50 } from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

export default class Player extends Component {
  showEditForm() {
    this.props.showEditForm();
  }

  render() {
    const player = this.props.player;
    const defense = (player.fielding + player.reaction + player.speed + player.armAccuracy + player.armStrength) * 3;
    const offense = (player.vision + player.battingPower + player.stealing + player.durability) * 3;
    const total = defense + offense;

    return (
      <Card>
        <CardMedia
          overlay={<CardTitle title={player.name} subtitle={`Offense: ${offense} - Defense: ${defense} - Total: ${total}`} />}
        >
          <img src="player.jpg" />
        </CardMedia>
        <CardText>
          <div style={styles.wrapper}>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.fielding}
              </Avatar>
              Fielding
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.vision}
              </Avatar>
              Vision
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.reaction}
              </Avatar>
              Reaction
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.battingPower}
              </Avatar>
              Batting Power
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.armStrength}
              </Avatar>
              Arm Strength
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.armAccuracy}
              </Avatar>
              Arm Accuracy
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.speed}
              </Avatar>
              Speed
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.stealing}
              </Avatar>
              Stealing
            </Chip>
            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={lightBlue50} backgroundColor={lightBlue800}>
                {player.durability}
              </Avatar>
              Durability
            </Chip>
          </div>
        </CardText>
        <CardActions>
          <RaisedButton
            label="Edit Player/Stats"
            labelPosition="before"
            style={styles.button}
            onClick={this.showEditForm.bind(this)}
          />
        </CardActions>
      </Card>
    );
  }
}
