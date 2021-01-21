import { FastifyInstance }  from 'fastify';
import Responses from '../utils/responses';

import testRoutes from './v1/test'

export default function(app: FastifyInstance) {

    app.register(testRoutes, { prefix: '/test' })

    app.setNotFoundHandler((req, res) => {
        res.code(404).send(Responses.errorResponses('001', 'Page not found', []));
    })

    app.setErrorHandler((error, req, res) => {
        res.code(500).send(Responses.errorResponses('001', 'Server error', [{ message: error.message }]));
    })

}