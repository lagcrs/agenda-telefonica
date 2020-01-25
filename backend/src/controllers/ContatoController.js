const axios = require('axios');
const Contato = require('../models/Contato');

module.exports = {

    async index(req, res){
        const contatos = await Contato.find({}, null, {sort: {nome: 1}});
        return res.json(contatos);
    },

    async store(req, res){
        const {nome, email, telefone} = req.body;

        const contato = await Contato.create({
            nome,
            email,
            telefone
        });

        return res.json(contato);
    }
}