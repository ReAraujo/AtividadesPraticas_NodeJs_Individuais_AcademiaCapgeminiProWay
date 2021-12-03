/* _  Crie uma classe ClienteTable e realize as configurações da nova tabela.
*/

import { Sequelize } from "sequelize";
import Database from "./Database.js";

// Classe para criação e definição dos elementos da tabela:

// Criação da variável que irá conectar no DB e utilização do Database para definição da tabela:
const ClienteTable = Database.define('clientes', {
    // Definição dos campos da tabela e dos comportamentos deles:
    id: {
        type: Sequelize.INTEGER, 
        allowNull: false,    // allowNull = não permitir nulos
        autoIncrement: true, // autoIncrement: = auto incrementa
        primaryKey: true     // primaryKey: = informação de chave primária
    },
    nomeCompleto: {
        type: Sequelize.STRING, // .STRING(x) é possível adicionar a quantidade de campos/valores em x
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

export default ClienteTable;