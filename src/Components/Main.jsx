import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {

    // API fetch info
    const [pokeData, setPokeData] = useState([]); // initialize pokeData as empty
    const [loading, setLoading] = useState(true); //initialize loading as true
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokedex, setPokedex] = useState();

    const pokeFun = async() => {
        setLoading(true)
        const res=await axios.get(url);
        // console.log(res.data.results);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
        // console.log(pokeData);
    }

    const getPokemon = async(res) => {
        res.map(async(item) => {
            const result = await axios.get(item.url);
            // console.log(result.data);
            // now we store all this in one array
            // first, create new array, and store all elements of existing array => [...state]
            // then we add to the new item in the array => result.data
            // basically works like a push function
            setPokeData(state => {
                state = [...state,result.data]
                // sorting id's in order
                // if a.id > b.id , then we return 1, else -1
                state.sort((a,b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    useEffect(() => {
        pokeFun();
        // if rendered ok, url runs
      }, [url])

    return(
        // wraps up all the elements inside the react fragement
        <>
            <div className="container">
                <div className="left-content">
                    <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokedex(poke)}/>
                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            // setPokeData ensures that only new pokemon are loaded
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Previous</button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next</button>}
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo data = {pokedex}/>
                </div>
            </div>
        </>
    )
}

export default Main;