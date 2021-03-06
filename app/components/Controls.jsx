var React = require('react');

var Controls = React.createClass({
    propTypes:{
      status: React.PropTypes.string.isRequired,
      onStatusChange: React.PropTypes.func
    },
    onStatusChange: function (newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function () {
        var {status} = this.props;
        var renderStartStopButton = () => {
            if (status === 'started'){
                return <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
            }else{
                return <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
            }
        }
        return (
            <div className="controls">
                {renderStartStopButton()}
                <button onClick={this.onStatusChange('stopped')} className="button hollow secondary">Clear</button>
            </div>
        );
    }
});

module.exports = Controls;