'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryProject = sequelize.define('CategoryProject', {
    projectId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    CategoryId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, {});
  CategoryProject.associate = function (models) {
    CategoryProject.belongsTo(models.Project, { foreignKey: 'projectId' })
    CategoryProject.belongsTo(models.Category, { foreignKey: 'categoryId' })
  };
  return CategoryProject;
};