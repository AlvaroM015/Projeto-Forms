
// Função para normalização do CEP - ela será usada quando formos buscar o cep
// Remove tudo aquilo que não é número
 export function limparCep(valor){
    return valor.replace(/\D/g, '').slice(0,8)
}

// Função para montar o modal 

 export function mostrarModal(mensagem){

 // recuperar a model do html
 const modal = document.querySelector('#alertModal');


// recuperar o elemento p que receberá as mensagens
 const mensagemElemento = document.querySelector('#alertMessage');

 // atualizar as mensagens quando o usuário cometer algum erro

 mensagemElemento.textContent = mensagem;

 // fazendo a exibição da modal

 modal.classList.remove('hidden');
 modal.classList.add('flex');
 //criando a função de tempo para fazer efeito de opacidade
        setTimeout(() => {
            modal.classList.remove('opacity-0')
            modal.classList.add('opacity-100')
        }, 50)

 }