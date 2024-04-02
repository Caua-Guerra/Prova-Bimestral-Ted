export function criarFila(tamanho = 5){
    return[...new Array(tamanho)]
}

export function inserirFila(fila = [], item){
    if(fila == null || item == null){
        console.log("Erro: Não foram passadas as informações necessarias");
        return
    }else{
        if(fila.indexOf(undefined) !== -1){
            fila[fila.indexOf(undefined)] = item
            return
        }
        console.log(`Fila está cheia, impossivel inserir ${item}`)
    }
}


export function removerFila(fila = []){
    if(fila !== null){
        if(fila[0] !== undefined){
            fila[0] = undefined
            for(let i = 0; i < fila.length; i++){
                fila[i] = fila[i+1]
            }
            fila[fila.length - 1] = undefined
            return
        }else{
            console.log("A fila está cheia");
        }
    }else{
        console.log("Erro: Não foram passadas as informações necessarias");
        return
    }
}

export function esvaziarFila(fila = []){
    for(let i = 1; i < fila.length; ++i){
        fila[i] = undefined
    }
    console.log("Todos os itens da pilha foram deletados com sucesso")
    console.log(fila)
    return
}

export function verTamanhoFila(fila = []){
    let emptySpaces = (fila.length - fila.indexOf(undefined))
    let usedSpaces = fila.length - emptySpaces
    let size = fila.length
    let subQueue = []
    for(let i = 0; i<fila.indexOf(undefined); i++){
        subQueue[i] = fila[i]
    }
        console.log(
        fila,
        {
            "emptySpaces": emptySpaces,
            "usedSpaces": usedSpaces,
            "size": size,
            "subQueue": subQueue,
        }
        )
}