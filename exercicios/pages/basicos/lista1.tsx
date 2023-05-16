export default function lista1(reps: number) {
    return (
        <div>
            <div>{gerarLista(10)}</div>
            <div>{gerarLista(5)}</div>
        </div>
    );
}

function gerarLista(reps: number) {
    let lista = [];

    for(let i = 0; i <= reps; i++) {
        lista.push(<span>{i} </span>);
    }

    return lista;
}