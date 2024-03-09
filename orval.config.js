module.exports = {
    petstore: {
        input: './src/backend/swagger.yaml',
        output: {
            target: './src/generated-api-v3.ts',
            baseUrl: '/api/v2',
        },
        hooks: {
            afterAllFilesWrite: 'prettier --write',
        },
    },
    /* petstore: {
        output: {
            mode: 'split',
            target: './src/generated-api-v3.ts',
            schemas: './src/model',
            mock: true,
        },
        input: {
            target: './src/backend/swagger.yaml',
        },
        hooks: {
            afterAllFilesWrite: 'prettier --write',
        },
    }, */
};