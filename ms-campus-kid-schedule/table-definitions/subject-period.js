'use strict';

module.exports.build = (DataTypes) => {
  return {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    // name: {
    //   allowNull: false,
    //   type: DataTypes.TEXT,
    // },
    // description: {
    //   allowNull: false,
    //   type: DataTypes.TEXT,
    // },
    period: {
      allowNull: false,
      references: {
        model: 'Periods',
        key: 'id',
      },
      type: DataTypes.INTEGER,
    },
    subject: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    // isActive: {
    //   allowNull: false,
    //   type: DataTypes.BOOLEAN,
    //   defaultValue: true,
    // },
    // createdAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // },
    // updatedAt: {
    //   allowNull: false,
    //   type: DataTypes.DATE,
    // },
  };
};

module.exports.constraints = {};
