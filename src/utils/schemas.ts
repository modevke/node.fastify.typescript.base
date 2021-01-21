

export const envVarsSchema = {
    type: "object",
    properties: {
        port: { type: "number", minimum: 0 },
        host: { type: 'string', maxLength: 255, minLength: 1},
        project: { type: 'string', maxLength: 255, minLength: 1},
        scheme: { type: 'string', maxLength: 255, minLength: 1},
        version: { type: 'string', maxLength: 255, minLength: 1},
        environment: { type: 'string', maxLength: 255, minLength: 1},

        dbUser: { type: 'string', maxLength: 255, minLength: 1},
        dbPassword: { type: 'string', maxLength: 255, minLength: 1},
        dbPort: { type: "number", minimum: 0 },
        dbHost: { type: 'string', maxLength: 255, minLength: 1},
        dbName: { type: 'string', maxLength: 255, minLength: 1},

        fastify:{ type: "number", enum: [0, 1] },
    },
    required: ["port", "host", "project", "version", "scheme", "environment", "fastify"],
    additionalProperties: false,
}