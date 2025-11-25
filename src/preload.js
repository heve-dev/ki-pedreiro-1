import { contextBridge, ipcRenderer } from 'electron/renderer';

contextBridge.exposeInMainWorld(
    //chave      objeto como valor
    // window.darkMode.toggle()
    // window.api.listar()
    // window.api.cadastrar(dados)
    'darkMode', {
        toggle: () => ipcRenderer.invoke('dark-mode:toggle')
    }
)
contextBridge.exposeInMainWorld(
    'api',{
        listar: () => ipcRenderer.invoke('usuarios:listar'),
        cadastrar: (usuario) => ipcRenderer.invoke('usuarios:cadastrar', usuario),
        buscarPorId: (id) => ipcRenderer.invoke("usuarios:buscarPorId", id),
        editarUsuario: (usuario) => ipcRenderer.invoke("usuarios:editar", usuario)
    }
)