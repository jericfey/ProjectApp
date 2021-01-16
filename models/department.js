//! sequelize model for Department table creation //
module.exports = (sequelize, DataTypes) => {
  const Department = sequelize.define("Department", {
    name: { type: DataTypes.STRING },
  });
  Department.associate = function (models) {
    Department.belongsTo(models.Role, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Department.associate = function (models) {
    Department.belongsTo(models.Project, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false,
      },
    });
  };
  Department.associate = (models) => {
    Department.hasMany(models.People, {
      onDelete: "cascade",
    });
  };

  return Department;
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
// Department.associate = (models) => {
//   Department.hasMany(models.Post, {
//     onDelete: "cascade",
//   });
// };

//! code to use for methods on database
// module.exports = (sequelize, DataTypes) => {
//   const Post = sequelize.define("Post", {
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//       validate: {
//         len: [1],
//       },
//     },
//     body: {
//       type: DataTypes.TEXT,
//       allowNull: false,
//       validate: {
//         len: [1],
//       },
//     },
//     category: {
//       type: DataTypes.STRING,
//       defaultValue: "Personal",
//     },
//   });
//   return Post;
// };
