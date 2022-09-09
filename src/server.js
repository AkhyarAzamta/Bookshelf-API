const Hapi = require('@hapi/hapi');
const routes = require('./routes');
const config = {
  port: 5000,
  host: 'localhost',
};

/**
 * Initiate Hapi Server
 * @param {Object} config
 * @param {number} config.port
 * @param {string} config.host
 * @returns {Hapi.Server}
 */
const init = async (config) => {
  const server = Hapi.server({
    port: config.port,
    host: config.host,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init(config);
