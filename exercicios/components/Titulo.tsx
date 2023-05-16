interface TituloProps {
    principal: string;
    secundario: string;
}

export default function Titulo(props: TituloProps) {
    return (
        <>
            <h1>{props.principal}</h1>
            <h2>{props.secundario}</h2>
        </>
    );
}