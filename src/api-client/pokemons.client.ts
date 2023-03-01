import { PokemonClient } from 'pokenode-ts';
import INamedAPIResource from 'types/INameAPIResource';
import IPokemon from 'types/IPokemon';

const api = new PokemonClient();

async function pokemonsList(): Promise<INamedAPIResource[]> {
	return await api.listPokemons().then((data) => {
		return data.results;
	});
}

async function pokemonDetails(name: string): Promise<IPokemon> {
	//safecast : we know for sure that the type is IPokemon by the docs: https://pokenode-ts-docs-gabb-c.vercel.app/docs/clients/pokemon-client
	return (await api.getPokemonByName(name).then((data) => data)) as IPokemon;
}

export default {
	pokemonsList,
	pokemonDetails,
};
