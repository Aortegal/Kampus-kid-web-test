"use strict";

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      validate: {
        notEmpty: true,
      },
      type: DataTypes.TEXT,
    },
    description: {
        validate: {
          notEmpty: true,
        },
        type: DataTypes.TEXT,
    },
  };
};

module.exports.constraints = {};