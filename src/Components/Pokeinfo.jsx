import React from 'react'
import { capitalizeFirstLetter } from '../utils/utils';

const Pokeinfo = ({data}) => {
    // console.log(data);
  return (

        <>

            {
                // if data is empty, return empty string. If not, return with the pokeInfo
                (!data) ? "" : (
                    <>
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="pokemon-sprite" />
                        <div className="abilities">
                            {
                                data.abilities.map(poke => {
                                    return(
                                        <>
                                            <div className="group">
                                                <h2>{capitalizeFirstLetter(poke.ability.name)}</h2>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke => {
                                    return(
                                        <>
                                            <h3>{capitalizeFirstLetter(poke.stat.name)}:{poke.base_stat}</h3>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </>
                )
            }

        </>

  )
}

export default Pokeinfo;