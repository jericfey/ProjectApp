//! sequelize model for Role table creation //
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: { type: DataTypes.STRING },
    cost_rate: { type: DataTypes.DECIMAL(15, 2) },
    bill_rate: { type: DataTypes.DECIMAL(15, 2) },
  });
  //! sets role as FK on people
  Role.associate = (models) => {
    Role.hasMany(models.People, {
      onDelete: "cascade",
    });
  };
  //! creates FK on roles for dept
  // Role.associate = (models) => {
  //   Role.belongsTo(models.Department, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false,
  //     },
  //   });
  // };
  return Role;
};
