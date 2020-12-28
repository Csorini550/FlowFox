'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },

  }, {});
  Project.associate = function (models) {
    Project.belongsTo(models.CategoryProject, { foreignKey: 'projectId' })
    Project.belongsToMany(models.User, { foreignKey: 'userId', through: models.ProjectTeam, otherKey: 'projectId' })
    Project.belongsTo(models.Section, { foreignKey: 'sectionId' })
    // associations can be defined here
  };
  return Project;
};