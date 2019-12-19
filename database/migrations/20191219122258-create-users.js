'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
    */
      return queryInterface.createTable('Users', { 
        id : {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        nome: {
          allowNull: false, 
          type: DataTypes.STRING,
        },
        email: {
          allowNull: false,
          type: DataTypes.STRING, 
          unique: true,
        },
        password: {
          allowNull : false, 
          type: DataTypes.STRING,
        },
        createdAt: {
          allowNull: false, 
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false, 
          type: DataTypes.DATE,
        },
      });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:*/
      return queryInterface.dropTable('Users');
  }
};
