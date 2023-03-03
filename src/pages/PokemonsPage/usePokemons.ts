import pokemonsClient from 'api-client/pokemons.client';
import { useEffect, useState } from 'react';
import INamedAPIResource from 'types/INameAPIResource';
import IPokemon from 'types/IPokemon';

export default function usePokemons() {
	const [pokemons, setPokemons] = useState<INamedAPIResource[]>([]);
	const [pokemonDetails, setPokemonDetails] = useState<IPokemon>();

	async function fetchPokemons() {
		const pokemonsRes = await pokemonsClient.pokemonsList();
		setPokemons(pokemonsRes);
	}

	useEffect(() => {
		fetchPokemons().catch(console.error);
	}, []);

	async function fetchPokemonDetails(name: string) {
		const pokemonInfo = await pokemonsClient.pokemonDetails(name);
		setPokemonDetails(pokemonInfo);
	}

	return {
		pokemons,
		pokemonDetails,
		fetchPokemonDetails,
	};
}
