//! sequelize model for Project table creation //
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  });
  //! includes foreign key as DepartmentID for project
  Project.associate = (models) => {
    models.Project.belongsTo(models.Department, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
    Project.hasMany(models.Task, {
      onDelete: "cascade",
    });
  };

  return Project;
};
