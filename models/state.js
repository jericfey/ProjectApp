//! sequelize model for State table creation //
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("State", {
    name: { type: DataTypes.STRING },
  });
  State.associate = function (models) {
    State.belongsTo(models.Task, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return State;
};
