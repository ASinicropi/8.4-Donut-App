var Backbone = require('backbone');

var Recipe = Backbone.Model.extend({
  idAttributes: '_id'
});

var RecipeCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Recipe',
});

module.exports = {
  Recipe: Recipe,
  RecipeCollection: RecipeCollection
};
