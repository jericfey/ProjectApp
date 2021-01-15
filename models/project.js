//! sequelize model for Project table creation //
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: { type: DataTypes.STRING },
  });
  Project.associate = function (models) {
    models.Project.belongsTo(models.Task, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Project.associate = (models) => {
    Project.hasMany(models.Department, {
      onDelete: "cascade",
    });
  };
  Project.associate = (models) => {
    Project.hasMany(models.People, {
      onDelete: "cascade",
    });
  };
  return Project;
};
