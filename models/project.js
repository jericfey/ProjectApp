//! sequelize model for Project table creation //
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define("Project", {
    name: { type: DataTypes.STRING },
  });
  //! inclused foreign key as DepartmentID for project
  Project.associate = (models) => {
    Project.belongsTo(models.Department, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  //! sets project as foreignK in Task
  Project.associate = (models) => {
    Project.hasMany(models.Task, {
      onDelete: "cascade",
    });
  };

  return Project;
};


