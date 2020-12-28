'use strict';
module.exports = (sequelize, DataTypes) => {
  const categoryProject = sequelize.define('categoryProject', {
    projectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  categoryProject.associate = function (models) {
    categoryProject.belongsTo(models.Project, { foreignKey: 'projectId' })
    categoryProject.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return categoryProject;
};