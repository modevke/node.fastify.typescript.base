
export = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.DataTypes.INTEGER
            },

            fname: {
                type: Sequelize.DataTypes.STRING
            },

            lname: {
                type: Sequelize.DataTypes.STRING
            },

            email: {
                type: Sequelize.DataTypes.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
                field: 'created_at'
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DataTypes.DATE,
                field: 'updated_at'
            },

            deletedAt: {
                type: Sequelize.DataTypes.DATE, 
                field: 'deleted_at'
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Users');
    }
};
