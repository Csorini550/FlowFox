'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },

  }, {});
  Project.associate = function (models) {
    Project.belongsToMany(models.User, { foreignKey: 'projectId', through: 'ProjectTeam', otherKey: 'userId' })
    Project.belongsToMany(models.Section, { foreignKey: 'projectId', through: "CategoryProjects", otherKey: 'sectionId' })

    // associations can be defined here
  };
  return Project;
};