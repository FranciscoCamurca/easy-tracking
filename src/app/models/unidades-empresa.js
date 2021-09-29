const mongoose = require('../../db/conexao');
const GrupoEmpresa = require('../../app/models/grupo-empresa');
const UnidadesSchema = new mongoose.Schema({
    grupo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "grupo-empresa",
        required: true
    },
    cnpjUnidade: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    siglaUnidade: {
        type: String,
        unique: true,
        index: true,
        required: true,
    },
    razaoSocialUnidade: {
        type: String,
        required: true,
    },
    ativo: {
        type: Boolean,
        required: true
    },
    contato: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
        required: true
    },
    numero: {
        type: String,
        required: true
    },
    complemento: {
        type: String,
        required: false
    },
    bairro: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    uf: {
        type: String,
        required: true
    },
    latitude: {
        type: String,
        required: false
    },
    longitude: {
        type: String,
        required: false
    },
    telefone: {
        type: String,
        required: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    }


});


const unidadesEmpresa = mongoose.model('unidades-empresa', UnidadesSchema);

module.exports = unidadesEmpresa;