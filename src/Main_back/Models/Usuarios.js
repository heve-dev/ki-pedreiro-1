class Usuarios {
  constructor() {
    this.Usuarios = [
      {"id":1, "nome": "jose", "idade": 26},
      {"id":2, "nome": "maria", "idade": 35},
      {"id":3, "nome": "ana", "idade": 32},
    ];
  }
  adicionar(usuario) {
    this.Usuarios.push(usuario);
  }
  async listar() {
    return this.Usuarios;
  }

  async buscarPorId(id){
   return this.Usuarios.find(usuario => usuario.id === Number(id));
}

  remover(usuario) {
    const index = this.Usuarios.indexOf(usuario);
    if (index !== -1) {
      this.Usuarios.splice(index, 1);
    }
  }
}
export default Usuarios;