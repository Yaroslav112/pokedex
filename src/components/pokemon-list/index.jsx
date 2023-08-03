import React, { useEffect, useState } from 'react';
import { Button, Container, PokemonCard, TypesContainer, TypesText } from "./styles";
import { Image } from "../pokemon-details/styles";
import { filterPokemonByType } from "../../helpers/sort-by-type";

const PokemonList = ({ onPokemonClick, selectedType }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState('');
    const filteredPokemon = filterPokemonByType(pokemonList, selectedType);

    const fetchPokemonList = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=12');
            const data = await response.json();

            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                try {
                    const pokemonResponse = await fetch(pokemon.url);
                    return await pokemonResponse.json();
                } catch (error) {
                    console.error('Error fetching Pokemon data:', error);
                }
            }));

            setPokemonList(pokemonDetails.filter((pokemon) => pokemon !== null));
            setNextPageUrl(data.next);
        } catch (error) {
            console.error('Error fetching Pokemon list:', error);
        }
    };

    useEffect(() => {
        fetchPokemonList();

    }, []);

    const loadMorePokemons = async () => {
        try {
            const response = await fetch(nextPageUrl);
            const data = await response.json();

            const pokemonDetails = await Promise.all(data.results.map(async (pokemon) => {
                const pokemonResponse = await fetch(pokemon.url);
                return await pokemonResponse.json();
            }));

            setPokemonList([...pokemonList, ...pokemonDetails]);
            setNextPageUrl(data.next);
        } catch (error) {
            console.error('Error loading more Pokemon:', error);
        }
    };

    const handlePokemonClick = (pokemon) => {
        onPokemonClick(pokemon);
    };

    return (
        <Container>
            {filteredPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} onClick={() => handlePokemonClick(pokemon)}>
                    <Image src={pokemon?.sprites?.other?.home?.front_default} alt={pokemon?.name} />
                    <h3>{pokemon.name}</h3>
                    <TypesContainer>
                        <TypesText type={pokemon.types[0]?.type?.name}>
                            {pokemon.types.length <= 2 ? pokemon.types[0]?.type?.name : null}
                        </TypesText>
                        <TypesText type={pokemon?.types[1]?.type?.name}>
                            {pokemon.types.length >= 1 ? pokemon?.types[1]?.type?.name : null}
                        </TypesText>
                    </TypesContainer>
                </PokemonCard>
            ))}
            <Button onClick={loadMorePokemons}>Load More</Button>
        </Container>
    );
};

export default PokemonList;
