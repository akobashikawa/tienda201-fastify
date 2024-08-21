const fp = require('fastify-plugin');
const ProductosService = require('../productos/productos-service');
const PersonasService = require('../personas/personas-service');
const VentasService = require('../ventas/ventas-service');

async function servicesPlugin(fastify, options) {

    const productosService = new ProductosService({ app: fastify });
    const personasService = new PersonasService({ app: fastify });
    const ventasService = new VentasService({...fastify.repositories, productosService, personasService});

    const services = {
        productosService,
        personasService,
        ventasService,
    };

    fastify.decorate('services', services);

}

module.exports = fp(servicesPlugin);