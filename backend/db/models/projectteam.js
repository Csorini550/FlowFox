'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectTeam = sequelize.define('ProjectTeam', {
    projectId: {
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    projectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  ProjectTeam.associate = function (models) {
    // associations can be defined here
    ProjectTeam.belongsTo(models.Project, { foreignKey: 'projectId' })
    ProjectTeam.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return ProjectTeam;
};