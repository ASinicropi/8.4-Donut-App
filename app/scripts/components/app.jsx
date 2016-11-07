var React = require('react');

var Template = require('./layout/template.jsx').Template;

var AppContainer = React.createClass({
  render: function(){
    return(
      <Template>
        Test
      </Template>
    );
  }
});

module.exports = {
  AppContainer: AppContainer
};
