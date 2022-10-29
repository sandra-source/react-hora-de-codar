import Button from "./evento/Button"

function Evento() {

    function meuEvento() {
        console.log(`ativando primeiro evento`)
    }

    function segundoEvento() {
        console.log('ativando o segundo evento')
    }

    return(
        <>
            <p>Clique para disparar um evento:</p>
            <Button event={meuEvento} text="Primeiro Evento" />
            <Button event={segundoEvento} text="Segundo Evento" />
        </>
    )
}

export default Evento