import path from 'path';

import Fastify from 'fastify';
import helmet from 'fastify-helmet';
import fastifyStatic from 'fastify-static';
import fastifyFormbody from 'fastify-formbody';
import fastswagger from 'fastify-swagger';

import {env} from './utils/env'
import dbConnector from './plugins/dbConnector';
import routes from './routes';

// GET ENVIRONMENT VARIABLES
const envVars = env();

// SERVER
const app = Fastify({
    logger: true,
    pluginTimeout: 100000,
    trustProxy: true
});

// PLUGINS
app.register(helmet, { contentSecurityPolicy: false });
app.register(dbConnector);
app.register(fastifyFormbody);
app.register(fastifyStatic, {
    root: path.join(__dirname, '/../public'),
});
app.register(fastswagger, {
    exposeRoute: envVars.fastify ? true : false,
    routePrefix: '/api/documentation',
    swagger: {
        info: {
            title: 'Base service',
            description: 'Base apis',
            version: envVars.version
        },
        host: envVars.host+":"+envVars.port,
        schemes: [envVars.scheme],
        consumes: ['application/json'],
        produces: ['application/json'],
        tags: [],
        securityDefinitions: {}
    }
});

// ROUTES
routes(app);

app.listen(envVars.port, '0.0.0.0', function (err, address) {
    if (err) {
        app.log.error(err.message);
        process.exit(1);
    }
    app.log.info(`Server listening on port ${address}`);
});