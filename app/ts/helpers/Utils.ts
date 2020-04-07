import { Negociacao } from "../models/index";

export function Imprime(...objetos: any[]){

    objetos.forEach(objeto => objeto.paraTexto());

}