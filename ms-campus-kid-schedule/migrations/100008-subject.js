'use strict';
const SubjectDefinition = require('../table-definitions')
  .SubjectDefinition;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'Subjects',
      SubjectDefinition.build(Sequelize),
      SubjectDefinition.constraints
    );
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Subjects');
  },
};
