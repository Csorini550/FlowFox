'use strict';
module.exports = (sequelize, DataTypes) => {
  const section = sequelize.define('section', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    projectId: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  section.associate = function (models) {
    // associations can be defined here
    section.hasMany(models.Task, { foreignKey: 'taskId' })
    section.belongsTo(models.Project, { foreignKey: 'projectId' })

  };
  return section;
};