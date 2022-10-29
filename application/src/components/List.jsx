import Item from './Item'

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
                <Item marca="Renault" ano_lancamento={2018} />
                <Item marca="BMW" ano_lancamento={2024} />
                <Item />
            </ul>
        </>
    )
}

export default List