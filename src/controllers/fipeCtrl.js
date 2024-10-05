const axios = require('axios');

const baseUrl = 'https://parallelum.com.br/fipe/api/v2';

class FIPECtrl {
    static async marcas(req, res) {
        const { tipo } = req.params;

        try {
            const { data } = await axios.get(`${baseUrl}/${tipo}/brands`);
            return res.send(data);
        } catch (error) {
            console.log(error);
        }

        return res.send({ success: false, msg: 'Aconteceu um erro interno inesperado' });
    }

    static async modelos(req, res) {
        const { tipo, marca } = req.params;

        try {
            const { data } = await axios.get(`${baseUrl}/${tipo}/brands/${marca}/models`);
            return res.send(data);
        } catch (error) {
            // console.log(error);
        }

        return res.send({ success: false, msg: 'Aconteceu um erro interno inesperado' });
    }

    static async anos(req, res) {
        const { tipo, marca, modelo } = req.params;

        try {
            const { data } = await axios.get(`${baseUrl}/${tipo}/brands/${marca}/models/${modelo}/years`);
            return res.send(data);
        } catch (error) {
            // console.log(error);
        }

        return res.send({ success: false, msg: 'Aconteceu um erro interno inesperado' });
    }

    static async preco(req, res) {
        const { tipo, marca, modelo, ano } = req.params;

        try {
            const { data } = await axios.get(`${baseUrl}/${tipo}/brands/${marca}/models/${modelo}/years/${ano}`);
            return res.send(data);
        } catch (error) {
            // console.log(error);
        }

        return res.send({ success: false, msg: 'Aconteceu um erro interno inesperado' });
    }
}

module.exports = { FIPECtrl };
