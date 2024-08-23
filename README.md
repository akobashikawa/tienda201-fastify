# Tienda 201 - Fastify

- **Tienda 101 - Fastify** es la versión monolito
    - [akobashikawa/tienda101-fastify: Ejercicio de implementar una tienda. Fastify con BDD. Arquitectura hexagonal. Monolito.](https://github.com/akobashikawa/tienda101-fastify).

```mermaid
graph TD
    style Frontend stroke:teal
    style Productos stroke:#89c
    style Personas stroke:#89c 
    style Ventas stroke:#89c
    style database stroke:#d62
    
    subgraph Monolito
        direction LR
        Frontend
        Productos <--> database[(Database)]
        Personas <--> database[(Database)]
        Ventas <--> database[(Database)]
    end
    
    Frontend <--> Productos
    Frontend <--> Personas
    Frontend <--> Ventas
```

- **Tienda 201 - Fastify** es una versión con microservicios invocados directamente
    - Cada microservicio tiene su propia base de datos
    - Ventas invoca a Productos y Personas usando métodos services
    - El frontend invoca directamente a cada microservicio directamente

```mermaid
graph LR
    style Frontend stroke:teal
    style Productos stroke:#89c
    style Personas stroke:#89c 
    style Ventas stroke:#89c
    style dbProductos stroke:#d62
    style dbPersonas stroke:#d62
    style dbVentas stroke:#d62
    
    Frontend
    
    subgraph Backend
        Productos <--> dbProductos[(DBProductos)]
        Personas <--> dbPersonas[(DBPersonas)]
        Ventas <--> dbVentas[(DBVentas)]
    end
    
    Frontend <--> Productos
    Frontend <--> Personas
    Frontend <--> Ventas
```

## Servicios

- **Productos Service**
    - PORT: 3001

```sh
cd backend/productos-service
npm install
npm test
npm run dev
```

- **Personas Service**
    - PORT: 3002


```sh
cd backend/personas-service
npm install
npm test
npm run dev
```

- **Ventas Service**
    - PORT: 3003


```sh
cd backend/ventas-service
npm install
npm test
npm run dev
```
