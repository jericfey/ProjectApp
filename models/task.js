//! sequelize model for Task table creation //
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define("Task", {
    name: { type: DataTypes.STRING },
    hours: { type: DataTypes.INTEGER },
    cost: { type: DataTypes.DECIMAL(15, 2) },
    revenue: { type: DataTypes.DECIMAL(15, 2) },
    billable: { type: DataTypes.BOOLEAN },
  });
  //! sets people as foreign key
  Task.associate = (models) => {
    models.Task.belongsTo(models.People, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    models.Task.belongsTo(models.State, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    models.Task.belongsTo(models.Project, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };

  // //! sets state as foreign key
  // Task.associate = (models) => {
  //   models.Task.belongsTo(models.State, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  // //! sets project as foreign key
  // Task.associate = (models) => {
  //   models.Task.belongsTo(models.Project, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };

  return Task;
};
