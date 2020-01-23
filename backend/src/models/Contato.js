const { Schema, model } = require('mongoose');

const ContatoSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Contato', ContatoSchema);