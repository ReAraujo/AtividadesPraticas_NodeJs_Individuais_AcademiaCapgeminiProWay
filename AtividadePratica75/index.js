/* _  Crie um arquivo index.js na raiz da pasta da atividade e 
      execute os testes de crud utilizando as classes model e repository.
*/

import ClienteApi from './api/ClienteApi.js';
import Express from 'express';
import bodyParser from 'body-parser';

const api = Express();
api.use(bodyParser.json()); // .use = função que irá converter o corpo das requisições para JSON
api.listen(3000, ()=>console.log("A aplicação está rodando..")); // .listen = função de "escutar" informando o número da porta (nesse caso, 8080)
api.use('/api/cliente', ClienteApi);// .use() = essa função também faz o mapeamento das rotas
