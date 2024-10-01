import { produtos } from "@/core";

export default function PaginaProduto(props:any){
    const id = +props.params.id; // O sinal de + faz a conversao de string para number;
    const produto = produtos.find((produto) => produto.id === id)
    return produto ? <div>{produto?.nome}</div> : <div>Produto não encontrado</div>
}