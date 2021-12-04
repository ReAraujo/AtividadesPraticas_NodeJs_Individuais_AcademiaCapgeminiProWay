import { Router } from 'express';
import Cliente from './../model/Cliente.js';
import ClienteRepository from './../repository/ClienteRepository.js';

const ClienteApi = Router();

const repository = new ClienteRepository();

// Listar = Get
ClienteApi.get('/', async (req, resp)=>{ 
    const listar = await repository.read();
    resp.send(listar);
}); 

// Criar = Post
ClienteApi.post('/', async (req, resp)=>{ 
    let {nomeCompleto, dataNascimento, cpf, endereco} = req.body;
    const cliente = new Cliente(nomeCompleto, dataNascimento, cpf, endereco);
    const retorno = await repository.create(cliente);
    resp.send(retorno);
}); 

// Alterar = Put
ClienteApi.put('/:id', async (req, resp)=>{ 
    let id = req.params.id;
    let {nomeCompleto, dataNascimento, cpf, endereco} = req.body;
    const cliente = new Cliente(nomeCompleto, dataNascimento, cpf, endereco, id);
    const retorno = await repository.update(cliente);
    resp.send(retorno);
}); 

// Deletar = Delete
ClienteApi.delete('/:id', async (req, resp)=>{ 
    const id = req.params.id;
    const retorno = await repository.delete(id);
    resp.send( JSON.stringify(retorno));
}); 

export default ClienteApi;