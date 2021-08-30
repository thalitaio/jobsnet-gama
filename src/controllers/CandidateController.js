const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { email, name, cep, cpf, nascimento, endereco, cidade, cargo, celular  } = req.body;

        const newCandidate = new Candidate();

        newCandidate.email = email;
        newCandidate.name = name;
        newCandidate.gender = gender;
        newCandidate.cep = cep;
        newCandidate.cargo = cargo;
        newCandidate.nascimento = nascimento;
        newCandidate.telefone = telefone;
        newCandidate.celular = celular;
        newCandidate.endereco = endereco;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.civil = civil;
        newCandidate.genero = genero;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habitacao;


        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ocorreu um erro. Revise suas informações.');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};