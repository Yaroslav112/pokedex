import React from 'react';
import { Container, Image, Table, Wrapper } from "./styles";

const PokemonDetails = ({ selectedPokemon }) => {
    const tableData = [
        { label: 'Type:', value: selectedPokemon?.types.map((typeData) => typeData.type.name).join(', ') },
        { label: 'Attack:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'attack').base_stat },
        { label: 'Defense:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'defense').base_stat },
        { label: 'HP:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'hp').base_stat },
        { label: 'SP Attack:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'special-attack').base_stat },
        { label: 'SP Defense:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'special-defense').base_stat },
        { label: 'Speed:', value: selectedPokemon?.stats.find((stat) => stat.stat.name === 'speed').base_stat },
        { label: 'Weight:', value: selectedPokemon?.weight },
        { label: 'Total moves:', value: selectedPokemon?.moves.length },
    ];

    return (
        <Container>
            <Wrapper>
                <Image src={selectedPokemon?.sprites?.other?.home?.front_default} alt={selectedPokemon?.name} />
                <h2>{selectedPokemon?.name}</h2>
            </Wrapper>
            <Table>
                <tbody>
                {tableData.map((pokemonInfo, index) => (
                    <tr key={index}>
                        <th>{pokemonInfo.label}</th>
                        <td>{pokemonInfo.value}</td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default PokemonDetails;
