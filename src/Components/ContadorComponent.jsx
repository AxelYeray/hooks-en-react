import { useCounter } from "./hooks/useCounter"

export const ContadorComponent = () => {
 
   const {contador, incrementar, decrementar, resetear} = useCounter(0)


    return (
        <>
            <h1>Contador: {contador}</h1>
            <button onClick={ () => incrementar(1)}  className="btn btn-primary">+1</button>
            <button onClick={ () => resetear()}    className="btn btn-danger">Reset</button>
            <button onClick={ () => decrementar(1,false)} className="btn btn-primary">-1</button>
        </>
    )
}