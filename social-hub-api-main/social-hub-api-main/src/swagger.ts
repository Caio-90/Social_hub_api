import express from "express"
import expressJSDocSwagger from "express-jsdoc-swagger"

export default function (app: express.Application) {
    const swaggerOptions = {
        info: {
            version: '0.0.1',
            title: 'Social Hub - SNEAR IFC',
            license: {
                name: 'MIT',
            },
        },
        security: {
            BasicAuth: {
                type: 'http',
                scheme: 'basic',
            },
            BearerAuth: {
                type: "http",
                scheme: "bearer"
            }
        },
        baseDir: __dirname,
        // Glob pattern to find your jsdoc files (multiple patterns can be added in an array)
        filesPattern: './routes/**/*.ts',
        // URL where SwaggerUI will be rendered
        swaggerUIPath: '/api-docs',
        // Expose OpenAPI UI
        exposeSwaggerUI: true,
        // Expose Open API JSON Docs documentation in `apiDocsPath` path.
        exposeApiDocs: false,
        // Open API JSON Docs endpoint.
        apiDocsPath: '/v3/api-docs',
        // Set non-required fields as nullable by default
        notRequiredAsNullable: false,
        // You can customize your UI options.
        // you can extend swagger-ui-express config. You can checkout an example of this
        // in the `example/configuration/swaggerOptions.js`
        swaggerUiOptions: {},
        // multiple option in case you want more that one instance
        multiple: true,
    }

    expressJSDocSwagger(app)(swaggerOptions)
}