var React = require('react');
var moment = require('moment');
var Immutable = require('Immutable');

var Day = React.createClass({

  getInitialState() {
    let cursor = this.props.timeStruct.cursor(['times', this.props.day]).toJS();
    let isToday = moment(this.props.day, 'dddd').format('dddd') === moment().format('dddd');

    return {
      numEntries: !cursor.clockedIn && isToday ? cursor.in.length + 1 : cursor.in.length,
      isToday: isToday
    };
  },

  componentWillReceiveProps(newProps) {
    let cursor = newProps.timeStruct.cursor(['times', this.props.day]).toJS();
    let isToday = moment(this.props.day, 'dddd').format('dddd') === moment().format('dddd');

    console.log('numEntries: ', !cursor.clockedIn && isToday ? cursor.in.length + 1 : cursor.in.length);

    this.setState({
      numEntries: !cursor.clockedIn && isToday ? cursor.in.length + 1 : cursor.in.length
    });
  },

  // componentWillUpdate() {
  //   console.log('updating');
  //   console.log(this.props)
  // },

  render: function() {
    let cursor = this.props.timeStruct.cursor(['times', this.props.day]).toJS();

    if(this.state.isToday) {
      console.log('in -> ', cursor.in);
      console.log('out -> ', cursor.out);
      console.log('clockedIn -> ', cursor.clockedIn);
    }

    let clockIn;
    let clockOut;

    if(this.state.isToday) {
      clockIn = (
        <button className="btn btn-success btn-block" onClick={this.handleClockIn}>Clock In</button>
      );
      if(cursor.clockedIn) {
        clockOut = (
          <button className="btn btn-danger btn-block" onClick={this.handleClockOut}>Clock Out</button>
        );
      }
    }

    let entries = [];
console.log(entries);
    for(let entryNum = 0; entryNum < this.state.numEntries; ++entryNum) {
      if(this.state.isToday) {
        console.log(this.state.numEntries);
        console.log(cursor.in.length, cursor.out.length, entryNum);
      }

      entries.push(
        <tr key={'entry'+entryNum}>
          <td>{entryNum === 0 ? this.props.day : ''}</td>
          <td>{cursor.in[entryNum] ? cursor.in[entryNum] : clockIn}</td>
          <td>{cursor.out[entryNum] ? cursor.out[entryNum] : clockOut}</td>
          <td>{entries.length + 1}</td>
        </tr>
      );
    }

    return (
      <div className="Day">
        {entries}
      </div>
    );
  },

  handleClockIn(evt) {
    let cursor = this.props.timeStruct.cursor(['times', this.props.day]).toJS();
    cursor.in.push('9:00');

    this.props.timeStruct.cursor(['times', this.props.day]).update(() => {
      return Immutable.fromJS({
        clockedIn: true,
        in: cursor.in,
        out: cursor.out
      });
    });
  },

  handleClockOut(evt) {
    let cursor = this.props.timeStruct.cursor(['times', this.props.day]).toJS();


    // this.setState({
    //   numEntries: this.state.numEntries + 1
    // });

    cursor.out.push('11:30');
    this.props.timeStruct.cursor(['times', this.props.day]).update(() => {
      return Immutable.fromJS({
        clockedIn: false,
        in: cursor.in,
        out: cursor.out
      });
    });
  }

});

module.exports = Day;
