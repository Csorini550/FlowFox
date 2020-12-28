'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: DataTypes.STRING,
    projectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    sectionId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    priority: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  task.associate = function (models) {
    // associations can be defined here
    task.belongsTo(models.Project, { foreignKey: 'projectId' })
    task.belongsTo(models.Section, { foreignKey: 'sectionId' })

  };
  return task;
};