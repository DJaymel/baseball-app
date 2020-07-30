import React from 'react';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

const TeamList = (props) => (
  <ListItem
    primaryText={props.player.name}
    leftAvatar={<Avatar src="player.jpg"/>}
  />
);

export default TeamList;
