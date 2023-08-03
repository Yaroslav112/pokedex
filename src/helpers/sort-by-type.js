export const filterPokemonByType = (pokemonList, type) => {
    if (!type) {
        return pokemonList;
    }

    return pokemonList.filter((pokemon) => pokemon.types.some(({ type: { name } }) => name === type));
};