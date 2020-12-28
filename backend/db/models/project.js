'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER

    },

  }, {});
  project.associate = function (models) {
    project.belongsTo(models.categoryProject, { foreignKey: 'projectId' })
    project.hasMany(models.user, { foreignKey: 'userId' })
    project.belongsTo(models.section, { foreignKey: 'sectionId' })
    project.hasMany(models.comment, { foreignKey: 'userId' })
    // associations can be defined here
  };
  return project;
};