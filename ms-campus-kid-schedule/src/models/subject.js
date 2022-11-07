"use strict";
const SubjectDefinition = require("../../table-definitions").SubjectDefinition;

module.exports = (sequelize, DataTypes) => {
  const entity = sequelize.define(
    "Subject",
    SubjectDefinition.build(DataTypes),
    SubjectDefinition.constraints
  );
  // entity.associate = function (models) {
  //   entity.hasMany(models.Period, {
  //     foreignKey: "Periods",
  //     onDelete: "NO ACTION",
  //   });
  // };
  return entity;
};
