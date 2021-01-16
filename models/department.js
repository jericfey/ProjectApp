//! sequelize model for Department table creation //
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("Department", {
    name: { type: DataTypes.STRING },
  });
  //! sets department as foreign key in roles.
  // Department.associate = (models) => {
  //   Department.hasMany(models.Role, {
  //     onDelete: "cascade",
  //   });
  // };
  //! sets department as foreign key in project.
  Department.associate = (models) => {
    Department.hasMany(models.Project, {
      onDelete: "cascade",
    });
  };

  return Department;
};


