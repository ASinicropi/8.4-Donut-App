var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');

var RecipeCollection = require('./models/recipes').RecipeCollection;

var LoginContainer = require('./components/loginSignup.jsx').LoginContainer;
var AppContainer = require('./components/app.jsx').AppContainer;
var AddRecipeForm = require('./components/recipeForm.jsx').AddRecipeForm;
var RecipeListContainer = require('./components/recipeList.jsx').RecipeListContainer;
var RecipeIdContainer = require('./components/recipeID.jsx').RecipeIdContainer;

var AppRouter = Backbone.Router.extend({
  routes: {
    '': 'index', // main screen
    'login/': 'login', // login screen
    'recipe/add/': 'recipeAdd', // add recipe form
    'recipe/list': 'recipeList', // recipe list
    'recipe/:id': 'recipeId', // recipe id screen
  },
  initialize: function(){
    $.ajaxSetup({
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', 'tiygvl');
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'slumber');
      }
    });
  },
  index: function(){
    ReactDOM.render(
      React.createElement(AppContainer),
      document.getElementById('app')
    );
  },
  login: function(){
    ReactDOM.render(
      React.createElement(LoginContainer),
      document.getElementById('app')
    );
  },
  recipeAdd: function(){
    ReactDOM.render(
      React.createElement(AddRecipeForm)
      document.getElementById('app')
    );
  },
  recipeList: function(){
    ReactDOM.render(
      React.createElement(RecipeListContainer)
      document.getElementById('app')
    );
  }
});

var router = new AppRouter();

module.exports = {
  router: router
};
