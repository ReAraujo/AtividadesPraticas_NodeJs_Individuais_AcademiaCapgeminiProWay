/* _  Realize a instalação dos pacotes do ORM sequelize e do driver do postgres 
      atraves dos comandos: npm install sequelize e npm install pg;
   _  Crie uma camada de banco de dados e nela adicione a classe Database. 
      Na classe database, crie uma instância da classe Sequelize e adicione as configurações do seu banco de dados.
*/

import { Sequelize } from "sequelize";

// Classe para fazer a Conexão com o DB:

// Criação da variável que irá conectar no DB:
const Database = new Sequelize( // -> cria-se uma instância de Sequelize e a partir dela ocorre a conexão com o DB 
    'postgres', // database
    'postgres', // user 
    '123789', // password
    {
        host: 'localhost', // endereço do server
        port: 5432, // porta do postgress - a porta 5432 é a porta por default 
        dialect: 'postgres'
    }

);   

export default Database;
