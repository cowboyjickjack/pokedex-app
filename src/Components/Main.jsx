import React from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";
import { useState, useEffect } from "react";
import { response } from "express";

const Main = () => {

    // API fetch info
    const [pokeData, setPokeData] = ([]);
    const [loading, setLoading] = (true); //initially, loading will be true
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");

    const pokeFun = async() => {
        setLoading(true)
        const res=await axios.get(url);
        console.log(response);
    }

    useEffect(() => {
        pokeFun();
    // if rendered ok, url runs
    }),([url]) 

    return(
        // wraps up all the elements inside the react fragement
        <>
            <div className="container">
                <div className="left-content">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <div className="btn-group">
                        <button>Previous</button>
                        <button>Next</button>
                    </div>
                </div>
                <div className="right-content">
                    <Pokeinfo/>
                </div>
            </div>
        </>
    )
}

export default Main;