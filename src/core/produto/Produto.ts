//Definido um produto atraves de interface.

import Especificacoes from "./Especificacoes"
import Precificavel from "./Precificavel"

//Exemplo de herança com precificavel
export default interface Produto extends Precificavel {
    id: number
    nome: string
    descricao: string
    marca: string
    modelo: string
    imagem: string
    videoReview: string
    nota: number
    tags: string[]
    especificacoes: Especificacoes //Relaçao de composição -> todos os podutos podem ter especificações 

}