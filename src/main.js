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
      clockedIn: true,
      in: ['9:00', '12:00'],
      out: ['11:30']
    },
    Monday: {
      clockedIn: false,
      in: ['9:00'],
      out: ['11:30']
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

timeStruct.on('swap', (newStructure) => {
  console.log(timeStruct.cursor(['times']).toJS());
  render()
});

var render = function() {
  var Page = React.render(
    React.createElement(TimeTracker, {
      timeStruct: timeStruct,
      timeCur: timeStruct.cursor(['times'])
    }), document.getElementById("time-tracker")
  );
}

render();
