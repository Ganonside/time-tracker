//require('6to5/polyfill');
var React = require('react');
var Immutable = require('immutable');
var Immstruct = require('immstruct');

var TimeTracker = require('./components/TimeTracker.jsx');

require('./styles/main.less');

console.log('react running');

var timeStruct = Immstruct('times');

timeStruct.cursor(['times']).update(() => {
  return Immutable.fromJS({
    Sunday: {
      clockedIn: false,
      in: ['9:00', '12:00'],
      out: ['11:30']
    },
    Monday: {
      clockedIn: false,
      in: [],
      out: []
    },
    Tuesday: {
      clockedIn: false,
      in: [],
      out: []
    },
    Wednesday: {
      clockedIn: false,
      in: [],
      out: []
    },
    Thursday: {
      clockedIn: false,
      in: [],
      out: []
    },
    Friday: {
      clockedIn: false,
      in: [],
      out: []
    },
    Saturday: {
      clockedIn: false,
      in: [],
      out: []
    }
  });
});

timeStruct.on('swap', render);

var render = function() {
  var Page = React.render(
    React.createElement(TimeTracker, {timeStruct: timeStruct}),
    document.getElementById("time-tracker")
  );
};

render();
