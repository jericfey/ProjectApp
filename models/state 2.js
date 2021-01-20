//! sequelize model for State table creation //
module.exports = (sequelize, DataTypes) => {
  const State = sequelize.define("State", {
    name: { type: DataTypes.STRING },
  });
  //! sets state as foreign key on task
  State.associate = (models) => {
    State.hasMany(models.Task, {
      onDelete: "cascade",
    });
  };
  return State;
};

