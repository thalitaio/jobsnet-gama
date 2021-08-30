const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
    name: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    gender: { type: String, unique: false, required: true },
    cep: { type: String, unique: false, required: true },
    cargo: { type: String, unique: false, required: true },
    nascimento: { type: String, unique: false, required: true },
    telefone: { type: String, unique: false, required: false },
    celular: { type: String, unique: true, required: true },
    endereco: { type: String, unique: false, required: true },
    cidade: { type: String, unique: false, required: true },
    estado: { type: String, unique: false, required: false },
    civil: { type: String, unique: false, required: false },
    identidade: { type: String, unique: true, required: false },
    cpf: { type: String, unique: true, required: true },
    veiculo: { type: String, unique: false, required: true },
    habilitacao: { type: String, unique: false, required: true },
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);