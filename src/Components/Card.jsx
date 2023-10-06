import React from 'react'
import { capitalizeFirstLetter } from '../utils/utils';

export const Card = ({pokemon, loading, infoPokemon}) => {
    // console.log(pokemon);
  return (
    
        <>

            {
                // if loading true, show loading. If false, return pokemon data
                loading ?  <h1>Loading...</h1>:
                pokemon.map((item) => {
                    return(
                        <>
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}> {/* // on click of the card, it shows pokeInfo data */}
                                <h2>{item.id}</h2>
                                <img src={item.sprites.front_default} alt="Charmander-sprite" />
                                <h2>{capitalizeFirstLetter(item.name)}</h2>
                            </div>
                        </>
                    )
                })
            }

        </>
        
  )
}

export default Card;