//! sequelize model for People table creation //
module.exports = (sequelize, DataTypes) => {
  const People = sequelize.define("People", {
    first_name: { type: DataTypes.STRING },
    last_name: { type: DataTypes.STRING },
    full_name: { type: DataTypes.STRING },
  });

  People.associate = function (models) {
    People.belongsTo(models.Task, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  People.associate = (models) => {
    People.hasMany(models.Role, {
      onDelete: "cascade",
    });
  };
  return People;
};

//!  relation for setting foreign key in another table

//   Task.associate = function (models) {
//     models.Task.belongsTo(models.User, {
//       onDelete: "CASCADE",
//       foreignKey: {
//         allowNull: false,
//       },
//     });

//! relation for accepting foreign key from another table
// People.associate = (models) => {
//   People.hasMany(models.Post, {
//     onDelete: "cascade",
//   });
// };
