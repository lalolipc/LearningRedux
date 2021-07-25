import React from 'react'

// hooks react redux
import {useDispatch, useSelector} from 'react-redux'

// importamos la acción
import {obtenerPokeAction} from '../redux/pokeDucks'

const Pokemones = () => {

    // declaramos displach para llamar a la acción o acciones
    const dispatch = useDispatch()

    // crearmos el state utilizando nuestra tienda
    // store.pokemones lo sacamos de la tienda
    const pokemones = useSelector(store => store.pokemones.array)

    return (
        <div>
            <h1>Pokemones!</h1>
            <button onClick={() => dispatch(obtenerPokeAction())}>Obtener</button>
            <ul>
                {
                    pokemones.map(item => (
                        <li key={item.name}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pokemones