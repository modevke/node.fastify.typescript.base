
export = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Projects', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            name: {
                type: Sequelize.STRING
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
        return queryInterface.dropTable('Projects');
    }
};
