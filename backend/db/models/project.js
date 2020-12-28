'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: {
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },

  }, {});
  project.associate = function (models) {
    project.belongsTo(models.categoryProject, { foreignKey: projectId })
    project.hasMany(models.User, { foreignKey: 'UserId' })
    project.belongsTo(models.section, { foreignKey: sectionId })
    // associations can be defined here
  };
  return project;
};