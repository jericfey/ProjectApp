//! sequelize model for People table creation //
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define("People", {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    full_name: { type: DataTypes.STRING },
  });
  //! creates foreign key as RoleID
  People.associate = (models) => {
    People.belongsTo(models.Role, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  //! sets people as foreign key in Task
  People.associate = (models) => {
    People.hasMany(models.Task, {
      onDelete: "cascade",
    });
  };
  return People;
};
