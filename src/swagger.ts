import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'HiddenPak API',
      version: '1.0.0',
      description: "Backend API for HiddenPak - Pakistan's Hidden Gems Travel Platform",
      contact: {
        name: 'HiddenPak Team',
        email: 'info@hiddenpak.com',
      },
    },
    servers: [
      {
        url: process.env.SERVER_URL || 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: [
    './src/dtos/index.ts',
    './src/routes/*.ts',
  ],
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;
