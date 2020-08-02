import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

export const Players = new Mongo.Collection('players');

Players.allow({
  insert() { return false; },
  update() { return false; },
  remove() { return false; }
});

Players.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; }
});

const PlayerSchema = new SimpleSchema({
  name: { type: String },
  team: { type: String },
  fielding: { type: Number, defaultValue: 0 },
  vision: { type: Number, defaultValue: 0 },
  reaction: { type: Number, defaultValue: 0 },
  battingPower: { type: Number, defaultValue: 0 },
  armStrength: { type: Number, defaultValue: 0 },
  armAccuracy: { type: Number, defaultValue: 0 },
  speed: { type: Number, defaultValue: 0 },
  stealing: { type: Number, defaultValue: 0 },
  durability: { type: Number, defaultValue: 0 },
  notes: { type: String, optional: true },
  owner: { type: String },
});

Players.attachSchema(PlayerSchema);
