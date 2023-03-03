import usePokemons from 'pages/PokemonsPage/usePokemons';
import { useEffect } from 'react';
import IPokemon from 'types/IPokemon';
import style from './pokemonCard.module.scss';

export interface IPokemonProps {
	name: string;
	setPokemonSelected: (pokemonDetails?: IPokemon) => void;
}

export default function PokemonCard({ name, setPokemonSelected }: IPokemonProps) {
	const { pokemonDetails, fetchPokemonDetails } = usePokemons();

	useEffect(() => {
		fetchPokemonDetails(name).catch(console.error);
	}, []);

	return (
		<figure className={style.Card}>
			<div className={style.Card__img_container}>
				{pokemonDetails ? (
					<img className={style.Card__img_pokemon} src={pokemonDetails?.sprites.front_default} alt={name} />
				) : (
					<p>loading...</p>
				)}
			</div>
			<figcaption className={style.Card__name} data-testid="card-figcaption-name">
				{name}
			</figcaption>
			<button className={style.Card__button} onClick={() => setPokemonSelected(pokemonDetails)}>
				{' '}
				More info
			</button>
		</figure>
	);
}
