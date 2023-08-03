import React, { useEffect, useState } from 'react';
import PokemonList from '../src/components/pokemon-list';
import PokemonDetails from '../src/components/pokemon-details';
import { Title, Container, PokemonListContainer, Wrapper } from "./components/global-styles/styles";
import { Select } from "./components/pokemon-list/styles";

const App = () => {
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [types, setTypes] = useState([]);
    const [selectedType, setSelectedType] = useState('');

    const fetchPokemonTypes = async () => {
        try {
            const response = await fetch('https://pokeapi.co/api/v2/type?limit=999');
            const data = await response.json();
            setTypes(data.results);
        } catch (error) {
            console.error('Error fetching Pokemon types:', error);
        }
    };

    useEffect(() => {
        fetchPokemonTypes();
    }, []);

    const handlePokemonClick = (pokemon) => {
        setSelectedPokemon(pokemon);
    };

    const handleSelectChange = (e) => {
        setSelectedType(e.target.value);
    };

    return (
        <Container>
            <Wrapper>
                <Title>Pokedex</Title>
                <Select value={selectedType} onChange={handleSelectChange}>
                    <option value="">All Types</option>
                    {types.map((type) => (
                        <option key={type.name} value={type.name}>
                            {type.name}
                        </option>
                    ))}
                </Select>
            </Wrapper>
            <PokemonListContainer>
                <PokemonList selectedType={selectedType} onPokemonClick={handlePokemonClick} />
                {selectedPokemon && (
                    <PokemonDetails selectedPokemon={selectedPokemon} />
                )}
            </PokemonListContainer>
        </Container>
    );
};

export default App;
