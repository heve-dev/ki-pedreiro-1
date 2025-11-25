import UsuariosView from "../UsuariosView.js"
class UsuarioListar{
    constructor(){
        this.view = new UsuariosView();
        this.app = document.getElementById("app"); //captura o clique na caixa principal
    }
    async renderizarLista(){
       const dados = await window.api.listar()
       console.log('dados na user listar', dados)
       setTimeout(()=>{
        this.adicionarEventos();
       },0)
       return this.view.renderizarLista(dados);
    }
    adicionarEventos(){
        this.app.addEventListener("click", async (e)=>{
            
        const idUsuario = e.target.getAttribute("data-id"); 
            if(e.target.classList.contains("editar-user")){
                console.log("Editar usuário com ID:", idUsuario);
                const usuario = await window.api.buscarPorId(idUsuario)
                this.view.abrirModal();
            }
            if(e.target.classList.contains("excluir-user")){
                console.log("Excluir usuário com ID:", idUsuario);
            }
        })
    }
}
export default UsuarioListar;

