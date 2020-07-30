import React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import {blue200, blue900} from 'material-ui/styles/colors';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    dislay: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12,
  },
};

const Player = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Hank Aaron" subtitle="Offense:98 - Defense: 97" />}
    >
      <img src="player.jpg" />
    </CardMedia>
    <CardText>
      <div style={styles.wrapper}>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Fielding
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Vision
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Reaction
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Batting Power
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Arm Strength
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Arm Accuracy
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Speed
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Stealing
        </Chip>
        <Chip
          backgroundColor={blue200}
          style={styles.chip}
        >
          <Avatar size={32} color={blue200} backgroundColor={blue900}>
          2
          </Avatar>
          Durability
        </Chip>
      </div>
    </CardText>
    <CardActions></CardActions>
  </Card>
);

export default Player;
