//atv 1

let alunos = ["Ana", "Bruno", "Carla", "Diego", "Elena"]

function fnExibirChamada(alunos){
    let primeiro = 0
    let ultimo = (alunos.length -1)
    console.log("o primeiro aluno(a) é: "+alunos[ultimo]);
    console.log("o ultimo aluno(a) é: "+alunos[primeiro]);
    console.log("tem "+alunos.length+" Alunos cadastrado")
}

fnExibirChamada(alunos)

//atv2

let fechamentoOnline = ["Teclado Mecânico", "Mouse Gamer"]

function fnAdicionarProduto(lista, novoItem){
    if(lista == "fechamentoOnline"){
        fechamentoOnline.push(novoItem)
    }

console.log(fechamentoOnline);

}


fnAdicionarProduto("fechamentoOnline","Headset USB")

//atv3

let fila = ["Marcos", "Julina", "Roberto"]

function fnEncaixarPrioridade(fila, nomePaciente){

    fila.unshift(nomePaciente)
    console.log(fila);
    
}

fnEncaixarPrioridade(fila, "Dona Clara (Idosa)")

//atv4

function fnChamarProximo(fila){
    let chamado = fila.shift()
    console.log(chamado);
    console.log(fila);
    
    
}

fnChamarProximo(fila)


//atv5

let acoes = ["Escritou título", "Aplicou negrito","Inseriu tabela"]

function fnDesfazerAcao(acoes){
    acoes.pop()
    console.log(acoes);
    
}

fnDesfazerAcao(acoes)

//atv6


let itensLoja = ["Camisa", "Calça", "Tênis", "Boné"]

function fnVerificarEstoque(itensLoja){
    console.log(itensLoja.length);
    
}
fnVerificarEstoque(itensLoja)

//atv7

let convidados = ["Lucas", "Mariana", "Thiago", "Beatriz"]

function fnEstaNaLista(convidados,nome){
    if(convidados.includes(nome) == true){
        console.log(nome+" esta convidado");
        
    }
    else{
        console.log(nome+" nao esta convidado");
        
    }
}

fnEstaNaLista(convidados, "Mariana")
fnEstaNaLista(convidados, "Rafael")

//atv8

let estoque = ["Arroz", "Feijão", "Açúcar", "Café", "Sal"]

function fnConsultaCorredor(estoque, item){
    
    if(estoque.includes(item) == true){
        console.log("seu produto: "+item+" esta no estoque");
        console.log("seu produto "+item+" esta na posição "+(estoque.indexOf(item) + 1));
        
    }
    else{
        console.log("seu produto: "+item+" não esta no estoque");
        
    }
}

fnConsultaCorredor(estoque, "Café")

// atv9

let basePreco = [15.00,25.00,40.00]

function fnAtualizarPreco(lista,indice,novoValor){
    if((lista.length - 1) < indice){
    lista[indice] = novoValor
    }
    console.log(`Novos valores de preços são: ${lista}`)
    
}


fnAtualizarPreco(basePreco, 1,28.5)
fnAtualizarPreco(basePreco, 2,48.5)
fnAtualizarPreco(basePreco, 3,78.5)

//atv10

function fnCriarBoletim(nota1,nota2,nota3){
    let notas = [nota1, nota2, nota3]

    console.log(notas);
    
    
}


fnCriarBoletim(8.0,7.5,9.0)
