/* _  Crie uma camada repository e crie a classe ClienteRepository. 
      Na classe, adicione os quatro métodos de crud que realizarão as operações 
      no banco através dos métodos do sequelize.
*/

import ClienteTable from "../db/ClienteTable.js";

// Classe para executar os métodos de CRUD:

class ClienteRepository {
    
    // Método Create (criar novo):
    async create(model){ // async = retorno assíncrono -> característica de não executar imediatamente pois os métodos esperam o retorno
        return await ClienteTable.create(model);
    }

    // Método Read (ler):
    async read(){
        const lista = await ClienteTable.findAll({raw:true}); // raw:true = propriedade para ter um retorno JSON mais limpo 
        return lista;
    }

    // Método Update (atualizar):
    async update(model){
        return await ClienteTable.update(model,{ // ao alterar, é preciso informar o objeto (model)
            where:{id:model.id} 
        });        
    }

    // Método Delete (deletar)
    async delete(id){
        return await ClienteTable.destroy({ // ao deletar, não é preciso informar o objeto 
            where:{id:parseInt(id)} // informando o número do ID do item a ser deletado
        });
    }
}

export default ClienteRepository;