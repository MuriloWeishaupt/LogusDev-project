import fs from 'fs';
import yaml from 'yaml';
import swaggerUi from 'swagger-ui-express';

const file = fs.readFileSync('./src/docs/swagger.yaml', 'utf8');
const swaggerDocument = yaml.parse(file);

export function setupSwagger(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}
