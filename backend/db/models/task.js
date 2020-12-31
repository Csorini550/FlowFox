'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    name: {
      allowNull: false,
      type: DataTypes.STRING(30)
    },
    projectId: {
      // allowNull: false,
      type: DataTypes.INTEGER
    },
    sectionId: {
      // allowNull: false,
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
  Task.associate = function (models) {
    // associations can be defined here
    Task.hasMany(models.Comment, { foreignKey: 'taskId' })
    Task.belongsTo(models.Section, { foreignKey: 'sectionId' })
    Task.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Task;
};