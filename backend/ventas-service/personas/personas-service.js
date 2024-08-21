const axios = require('axios');

const personasServiceUrl = 'http://localhost:3002/api/personas';

class PersonasService {

    constructor() {
    }

    async getItemById(id) {
        try {
            const { data: item } = await axios.get(`${personasServiceUrl}/${id}`);;
            return item;
        } catch (error) {
            return null;
        }
    }

    async createItem(data) {
        try {
            const response = await axios.post(`${personasServiceUrl}/${id}`, data);;
            return response.data;
        } catch (error) {
            return null;
        }
    }

}

module.exports = PersonasService;