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
    console.log((estoque.indexOf("Café") + 1));
    
    if(estoque.includes(item) == true){
        console.log("seu produto: "+item+" esta no estoque");
        
    }
    else{
        console.log("seu produto: "+item+" não esta no estoque");
        
    }
}

fnConsultaCorredor(estoque, "Macarrão")

//atv9
