const axios = require('axios');

const productosServiceUrl = 'http://localhost:3001/api/productos';

class ProductosService {

    constructor() {
    }

    async getItemById(id) {
        try {
            const response = await axios.get(`${productosServiceUrl}/${id}`);;
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async createItem(data) {
        try {
            const response = await axios.post(`${productosServiceUrl}/${id}`, data);;
            return response.data;
        } catch (error) {
            return null;
        }
    }

    async updateItem(id, data) {
        const response = await axios.put(`${productosServiceUrl}/${id}`, data);;
        return response.data;
    }

}

module.exports = ProductosService;