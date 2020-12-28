'use strict';
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define('comment', {
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    taskId: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    message: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {});
  comment.associate = function (models) {
    // associations can be defined here
    comment.belongsTo(models.User, { foreignKey: 'userId' })
    comment.belongsTo(models.Task, { foreignKey: 'taskId' })


  };
  return comment;
};