'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        validation: {
          notNull: {
            msg: 'Username is requried',
          },
          notEmpty: {
            msg: 'Username is requried',
          },
        }
      },
      password: {
        type: DataTypes.STRING,
        validation: {
          notNull: {
            msg: 'Password is requried',
          },
          notEmpty: {
            msg: 'Password is requried',
          },
        }
      },
      role: DataTypes.ENUM('admin', 'client'),
    },
    {
      hooks: {
        beforeCreate(user, opt) {
          user.password = 'hashed'
        }
      }
    }
  );
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};
