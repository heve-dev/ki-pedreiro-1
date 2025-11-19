import Usuarios from '../Models/Usuarios.js';
class UsuarioController{
    constructor(){
        this.usuarioModel = new Usuarios();
    }
    async listar(){
        const dados = await this.usuarioModel.listar();
        console.log('dados nno controller', dados);
        return dados
        
    }
    async cadastrar(usuario){
        console.log(usuario)
        if (!usuario.nome || !usuario.idade){
            return false;
        }
        this.usuarioModel.adicionar(usuario);
        return true;
    }
}
export default UsuarioController;