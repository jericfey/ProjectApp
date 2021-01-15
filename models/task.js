//! sequelize model for Task table creation //
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: { type: DataTypes.STRING },
    hours: { type: DataTypes.INTEGER },
    cost: { type: DataTypes.DECIMAL(15, 2) },
    revenue: { type: DataTypes.DECIMAL(15, 2) },
    billable: { type: DataTypes.BOOLEAN },
  });
  Task.associate = (models) => {
    Task.hasMany(models.State, {
      onDelete: "cascade",
    });
  };
  Task.associate = (models) => {
    Task.hasMany(models.People, {
      onDelete: "cascade",
    });
  };
  Task.associate = (models) => {
    Task.hasMany(models.Projects, {
      onDelete: "cascade",
    });
  };
  return Task;
};
