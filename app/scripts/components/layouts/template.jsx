var React = require('react');

var Template = React.createClass({
  navToLogin: function(){
    this.props.router.navigate('login/', {trigger: true});
  },
  navToRecipeForm: function(){
    this.props.router.navigate('recipe/add/', {trigger: true});
  },
  navToRecipeList: function(){
    this.props.router.navigate('recipe/list', {trigger: true});
  },
    render: function(){
      return(
        <nav className="navbar navbar-default">
          <h2>Hello, welcome to Batch Maker App!</h2>
             <span className="nav-spans" onClick={this,navToLogin}>Login</span>
             <span className="nav-spans" onClick={this.navToRecipeForm}>Add Recipe</span>
             <span className="nav-spans" onClick={this.navToRecipeList}>Recipes</span>
         </nav>
      );
    }
});

module.exports = {
  Template: Template
};
