'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Book title is requried'
        }
      }
    },
    description: DataTypes.STRING
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};