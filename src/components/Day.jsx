var React = require('react');
var moment = require('moment');
var Immutable = require('Immutable');

var Day = React.createClass({

  render: function() {
    let cursor = this.props.timeStruct.cursor(['times', this.props.day]).toJS();

    let clockIn = (
      <button className="btn btn-success btn-block" onClick={this.handleClockIn}>Clock In</button>
    );
    let clockOut = (
      <button className="btn btn-danger btn-block" onClick={this.handleClockOut}>Clock Out</button>
    );

    let entries;
    let entryNum = 0;
    if(cursor.in.length === 0) {
      entries = (
        <tr key={'entry'+entryNum}>
          <td>{this.props.day}</td>
          <td>{clockIn}</td>
          <td></td>
        </tr>
      );
    } else {
      entries = [];
      for(let i = 0; i < cursor.in.length; ++i) {
        entries.push(
          <tr key={'entry'+entryNum++}>
            <td>{i === 0 ? this.props.day : ''}</td>
            <td>{cursor.in[i]}</td>
            <td>{i <= cursor.out.length - 1 ? cursor.out[i] : clockOut}</td>
          </tr>
        );
      }
    }

    return (
      <div className="Day">
        {entries}
      </div>
    );
  }

});

module.exports = Day;
