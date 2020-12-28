'use strict';
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('section', {
    name: DataTypes.STRING,
    projectId: DataTypes.INTEGER
  }, {});
  section.associate = function (models) {
    // associations can be defined here
    section.hasMany(models.Task, { foreignKey: 'taskId' })
  };
  return section;
};