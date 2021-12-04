export class Cliente {
    private _id:number;
    private _nomeCompleto:string;
    private _dataNascimento:string;
    private _cpf:string;
    private _endereco:string;

    get id():number{
        return this._id;
    }

    get nomeCompleto():string{
        return this._nomeCompleto;
    }
    set nomeCompleto(nomeCompleto:string){
        this._nomeCompleto = nomeCompleto;
    }

    get dataNascimento():string{
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento:string){
        this._dataNascimento = dataNascimento;
    }

    get cpf():string{
        return this._cpf;
    }
    set cpf(cpf:string){
        this._cpf = cpf;
    }

    get endereco():string{
        return this._endereco;
    }
    set endereco(endereco:string){
        this._endereco = endereco;
    }
}