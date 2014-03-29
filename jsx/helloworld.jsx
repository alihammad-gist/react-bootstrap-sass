/** @jsx React.DOM */
(function (window, undefined) {

window.Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0};
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 1000);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div className="well">Seconds Elapsed: {this.state.secondsElapsed}</div>
    );
  }
});

window.Navigation = React.createClass({

  getInitialState: function () {
    return {links: [{label: 'Home', 'href': 'http://localhost:9999'}]};
  },

  render: function () {
      var links = this.state.links.map(function (link) {
        return (
          <li><a href={link.href}>{link.label.toLowerCase()}</a></li>
        );
      });
    return (
      <ul>
        {links} 
      </ul>
    );
  }
});

})(window);
