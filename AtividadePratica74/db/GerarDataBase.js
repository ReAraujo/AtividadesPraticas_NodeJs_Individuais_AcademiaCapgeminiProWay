/* _  Crie uma classe GerarDataBase onde executará o comando sync do Sequelize.
   _  Verifique se a tabela foi gerado com sucesso no Banco de Dados.
*/

// Classe para executar o sync de coneção com o DB:

import Database from "./Database.js";
import ClienteTable from "./ClienteTable.js";

// Configurações de async do JS:
Database
    .sync()
    .then(()=> console.log("Sincronizado com o DB com sucesso!")) // quando terminar de executar, retornará uma resposta
    .catch(()=> console.log("Desculpe, não foi possível conectar ao DB"));  // caso ocorrer algum erro na conexão, usa-se o catch para tratamento