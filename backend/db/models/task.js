'use strict';
module.exports = (sequelize, DataTypes) => {
  const task = sequelize.define('task', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
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
      type: DataTypes.STRING
    },
    completed: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    dueDate: {
      allowNull: false,
      type: DataTypes.DATE
    },
  }, {});
  task.associate = function (models) {
    // associations can be defined here
    task.belongsTo(models.Comment, { foreignKey: 'projectId' })
    task.belongsTo(models.Section, { foreignKey: 'sectionId' })
    task.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return task;
};