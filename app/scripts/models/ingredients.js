var Backbone = require('backbone');

var Ingredient = Backbone.Model.extend({
  idAttributes: '_id'
});

var IngredientsCollection = Backbone.Collection.extend({
  model: Recipe,
  url: 'https://tiny-parse-server.herokuapp.com/classes/Ingredient',
});

module.exports = {
  Ingredients: Ingredients,
  IngredientsCollection: IngredientsCollection
};
