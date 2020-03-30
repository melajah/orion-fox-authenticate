'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: 'Book title is requried',
          },
          notEmpty: {
            msg: 'Book title is requried',
          },
        },
      },
      description: DataTypes.STRING,
      UserId: {
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Book.associate = function(models) {
    // associations can be defined here
    Book.belongsTo(models.User)
  };
  return Book;
};
