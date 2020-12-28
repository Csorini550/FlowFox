'use strict';
module.exports = (sequelize, DataTypes) => {
  const Section = sequelize.define('Section', {
    name: {
      allowNull: false,
      type: DataTypes.STRING
    },
    projectId: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  Section.associate = function (models) {
    // associations can be defined here
    Section.hasMany(models.Task, { foreignKey: 'taskId' })
    Section.belongsTo(models.Project, { foreignKey: 'projectId' })

  };
  return Section;
};