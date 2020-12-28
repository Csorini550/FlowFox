'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },


  }, {});
  Category.associate = function (models) {
    // associations can be defined here
    Category.belongsTo(models.CategoryProject, { foreignKey: 'projectId' })
  };
  return Category;
};