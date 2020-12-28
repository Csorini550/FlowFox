'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },


  }, {});
  category.associate = function (models) {
    // associations can be defined here
    category.belongsTo(models.categoryProject, { foreignKey: 'projectId' })
  };
  return category;
};