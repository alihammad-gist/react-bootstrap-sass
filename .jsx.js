/** @jsx React.DOM */
(function (window, undefined) {

window.Timer = React.createClass({displayName: 'Timer',
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
      React.DOM.div( {className:"well"}, "Seconds Elapsed: ", this.state.secondsElapsed)
    );
  }
});

window.Navigation = React.createClass({displayName: 'Navigation',

  getInitialState: function () {
    return {links: [{label: 'Home', 'href': 'http://localhost:9999'}]};
  },

  render: function () {
      var links = this.state.links.map(function (link) {
        return (
          React.DOM.li(null, React.DOM.a( {href:link.href}, link.label.toLowerCase()))
        );
      });
    return (
      React.DOM.ul(null, 
        links 
      )
    );
  }
});

})(window);
