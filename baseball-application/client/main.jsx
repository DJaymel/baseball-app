import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import injectTapEventPlugin from 'react-tap-event-plugin';

import App from '../imports/ui/App';
import New from '../imports/ui/New';
import Lost from '../imports/ui/Lost';

// injectTapEventPlugin();

Meteor.startup(() => {
  render((
    <Router>
      <Switch>
        <Route exact path="/" component={ App }/>
        <Route path="/new" component={ New }/>
        <Route component={ Lost }/>
      </Switch>
    </Router>
  ), document.getElementById('react-target'));
});
