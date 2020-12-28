'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
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
  Comment.associate = function (models) {
    // associations can be defined here
    Comment.belongsTo(models.User, { foreignKey: 'userId' })
    Comment.belongsTo(models.Task, { foreignKey: 'taskId' })


  };
  return Comment;
};