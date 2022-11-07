const {
  Subject,
  sequelize,
} = require('../../../models');

module.exports.create = async (entityData) => {
  const created = await Subject.create(entityData);
  return created.dataValues;
};

module.exports.findById = async function (id) {
  return await Subject.findOne({
    where: { id },
  });
};

module.exports.findAll = async function () {
  return await Subject.findAll({ where: { isActive: true } });
};

module.exports.update = async function (id, entityData) {
  return await Subject.update(entityData, { where: { id, }, });
};

module.exports.setActive = async (id, isActive = true) => {
  const entityData = { isActive };
  return await Subject.update(entityData, { where: { id } });
};