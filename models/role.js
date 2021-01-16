//! sequelize model for Role table creation //
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define("Role", {
    name: { type: DataTypes.STRING },
    cost_rate: { type: DataTypes.DECIMAL(15, 2) },
    bill_rate: { type: DataTypes.DECIMAL(15, 2) },
  });
  Role.associate = function (models) {
    Role.belongsTo(models.People, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Role.associate = (models) => {
    Role.hasMany(models.Department, {
      onDelete: "cascade",
    });
  };
  return Role;
};
