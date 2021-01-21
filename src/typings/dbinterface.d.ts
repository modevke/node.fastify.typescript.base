import * as Sequelize from "sequelize";
import {UserInstance} from '../db/models/user'
import {ProjectInstance} from '../db/models/project'

export interface DbInterface {
    sequelize: Sequelize.Sequelize;
    Sequelize: typeof Sequelize;
    User: Sequelize.ModelCtor<UserInstance>;
    Project: Sequelize.ModelCtor<ProjectInstance>;
}