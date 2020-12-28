'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectTeam = sequelize.define('projectTeam', {
    projectId: {
      type: DataTypes.INTEGER
    },
    userId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
    projectId: {
      allowNull: false,
      type: Sequelize.INTEGER
    },
  }, {});
  projectTeam.associate = function (models) {
    // associations can be defined here
    projectTeam.belongsTo(models.Project, { foreignKey: 'projectId' })
    projectTeam.belongsTo(models.User, { foreignKey: 'UserId' })
  };
  return projectTeam;
};