import UsuariosView from "../UsuariosView.js"
import MensagemDeAlerta from "../../../Services/MensagemDeAlerta.js";
class UsuarioListar{
    constructor(){
        this.view = new UsuariosView();
        this.mensagem = new MensagemDeAlerta();
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
                const nome = document.getElementById("nome")
                const idade = document.getElementById("idade")
                nome.value = usuario.nome
                idade.value = usuario.idade
                this.view.abrirModal();
            }
            if(e.target.classList.contains("excluir-user")){
                console.log("Excluir usuário com ID:", idUsuario);
            }
            if(e.target.classList.contains("close")){
                this.view.fecharModal();
            }
        })

        const formulario = document.getElementById('form-usuario');
        formulario.addEventListener('submit', async (event)=>{
            event.preventDefault();
            console.log(event);
            const nome = document.getElementById('nome');
            const idade = document.getElementById('idade');
            const usuario = {
                nome:nome.value,
                idade: idade.value
                }
                const resultado = await window.api.editarUsuario(usuario);
                if(resultado){
                    nome.value='';
                    idade.value='';
                    this.mensagem.sucesso();
                }else{
                    this.mensagem.erro();
        }
      })
    }
}
export default UsuarioListar;

