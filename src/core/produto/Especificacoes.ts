export default interface Especificacoes {
    destaque: string
    [chave: string] : string | number | boolean //Permite criar qualquer atributo sendo string dentro de especificações e o valor será dele sera do tipo string / number / boolean
}