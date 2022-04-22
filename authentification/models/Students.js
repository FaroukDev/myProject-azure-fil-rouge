module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
        name: {
            type: DataTypes.STRING,
            allowNull: true,


        },

        description: {
            type: DataTypes.STRING,
            allowNull: true,


        },
        grade: {
            type: DataTypes.STRING,
            allowNull: true,


        },


    })

    Students.associate = (models) => {
        Students.hasMany(models.Comments, {
            onDelete: "cascade",
            
        });
    }

    return Students
}

