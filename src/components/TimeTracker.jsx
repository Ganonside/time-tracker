var React = require('react');

var TimeTracker = React.createClass({

  render: function() {
    return (
      <div className="">
        <div className="container">
          <div className="btn-group btn-group-lg" role="group" aria-label="Date Selector">
            <button type="button" className="btn btn-default">Sunday</button>
            <button type="button" className="btn btn-default active">Monday</button>
            <button type="button" className="btn btn-default">Tuesday</button>
            <button type="button" className="btn btn-default">Wednesday</button>
            <button type="button" className="btn btn-default">Thursday</button>
            <button type="button" className="btn btn-default">Friday</button>
            <button type="button" className="btn btn-default">Saturday</button>
          </div>
          &nbsp;
          <div className="btn-group btn-group-lg" role="group" aria-label="Date Selector">
            <button type="button" className="btn btn-default"><span className="fa fa-chevron-left"></span></button>
            <button type="button" className="btn btn-default">Today</button>
            <button type="button" className="btn btn-default"><span className="fa fa-chevron-right"></span></button>
          </div>


          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th>Client</th>
                <th>Task</th>
                <th>Time</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>University of Cincinnati</td>
                <td>Working on something</td>
                <td>
                  <strong>1:15</strong>
                </td>
                <td>
                  <button className="btn btn-success">
                    <span className="fa fa-clock-o fa-1x"></span>
                    Start
                  </button>
                </td>
              </tr>
              <tr>
                <td>University of Cincinnati</td>
                <td>Working on something else</td>
                <td>
                  <strong>4:35</strong>
                </td>
                <td>
                  <button className="btn btn-success">
                    <span className="fa fa-clock-o fa-1x"></span>
                    Start
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }

});

module.exports = TimeTracker;
