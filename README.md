# Tienda 201 - Fastify

- **Tienda 101 - Fastify** es la versión monolito
    - [akobashikawa/tienda101-fastify: Ejercicio de implementar una tienda. Fastify con BDD. Arquitectura hexagonal. Monolito.](https://github.com/akobashikawa/tienda101-fastify).
- **Tienda 201 - Fastify** es una versión con microservicios
    - Cada microservicio tiene su propia base de datos
    - Ventas invoca a Productos y Personas usando métodos services
    - El frontend invoca directamente a cada microservicio

## Servicios

- **Productos Service**
    - PORT: 3001
- **Personas Service**
    - PORT: 3002
- **Ventas Service**
    - PORT: 3003