import * as Sequelize from "sequelize";
import dotenv from 'dotenv';
import { UserFactory } from "./models/user";
import { ProjectFactory } from "./models/project";
import { DbInterface } from "../typings/dbinterface";
dotenv.config({path: __dirname + '/../../.env'});

const dbData = require('../../config/db.js')[process.env.NODE_ENV];

let sequelize =  new Sequelize.Sequelize(dbData);

export const db: DbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize),
    Project: ProjectFactory(sequelize)
}

// ASSOCIATIONS
db.User.hasMany(db.Project, { foreignKey: "user_id" })
db.Project.belongsTo(db.User, { foreignKey: "user_id" })
