//require('6to5/polyfill');
var React = require('react');
var TimeTracker = require('./components/TimeTracker.jsx');

require('./styles/main.less');

console.log('react running');


React.render(
  React.createElement(TimeTracker),
    document.getElementById("time-tracker")
);
