import { criarFila, inserirFila, removerFila, esvaziarFila, verTamanhoFila } from "./funcoes.js";

let fila = criarFila(3)
console.log(fila);

inserirFila(fila, "a" )
console.log(fila);
inserirFila(fila)
console.log(fila);
inserirFila("c" )
console.log(fila);
inserirFila()
console.log(fila);

removerFila(fila)
console.log(fila);

esvaziarFila(fila)

verTamanhoFila(fila)