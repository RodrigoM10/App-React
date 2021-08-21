import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

export const Contador = () => {

    const [contador, setContador] = useState(10)
    const [valor, setValor] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
    const restartValor = (valor) => {
        setContador(contador - valor)
    }
    const changeValor = (e) => {
        setValor(Number(e.target.value))
    }
    const sumarValor = () =>{
        setContador(contador + valor)
    }
    // Los estados al modificarlos, se produce un rellamado a la funcion. No se puede actualizar los resultados de el componente ( el codigo jsx).Para que eso se actualice en la pantalla, hay que volver a llamar a la funcion que muestra esos datos (ej contador). Como lo hago? con los estados. Cuando yo tengo un estado dentro del componete y hacemos que el valor del mismo cambie con (setContador) una vez q cambia un estado, todo el componente vuelve a llamarse, entonces todo vuelve a reenderizarse y se llama de nuevo al componente.
    // Ademas, los datos variables se conservan cuando se produce el reenderizsado. Si estuviese declarada fuera, se declara con el valor asignado inicialmente.
    // APRENDER ESTADOS   
    return (
        <div className="text-primary">
            <h2>Contador: {contador}</h2>
            {/* Si le pongo los parentesis asi: sumar(), como es JS se va a llamar a la funcion y lo que obtendria seria el retorno de la funcion. En este caso seria un undifined */}
            <Button onClick={sumar} variant="primary">+1</Button>
            <Button onClick={restar} variant="danger">-1</Button>
            <button onClick={() => setContador(contador + 10)} className="btn btn-primary m-1">Sumar 10</button>
            <button onClick={() => setContador(contador - 10)} className="btn btn-warning m-1">Restar 10</button>
            <div className="container">
                <p>Caunto quiere agregar?</p>
                <input type="number" className="form-control" onChange={changeValor} />
                <button onClick={sumarValor} className="btn btn-success">Sumar: {valor}</button>
            </div>
        </div>
    )
}
