import {FastifyInstance} from 'fastify';
import fastifyPlugin from 'fastify-plugin';
import { db } from '../db/sequelize';
import datatable from 'sequelize-datatable'
import { DbInterface } from '../typings/dbinterface';

declare module 'fastify' {
    interface FastifyRequest {
        pgdb: {
            db: DbInterface,
            dt: any
        }
    }
}

async function dbConnector(app: FastifyInstance, options){
    const data = {
        db: db,
        dt: datatable
    }

    app.decorateRequest('pgdb', data);
}

export default fastifyPlugin(dbConnector, '3.x');