import MorePokemonDetailsModal from 'components/MorePokemonDetailsModal/MorePokemonDetailsModal';
import PokemonCard from 'components/PokemonCard/PokemonCard';
import { useState } from 'react';
import INamedAPIResource from 'types/INameAPIResource';
import IPokemon from 'types/IPokemon';
import pokedexLogo from './images/pokedex_logo.png';
import style from './Pokemons.module.scss';
import usePokemons from './usePokemons';

export default function PokemonsPage() {
	const { pokemons } = usePokemons();
	const [pokemonSelected, setPokemonSelected] = useState<IPokemon | undefined>();
	return (
		<div className={style.Pokemons}>
			<div className={style.Pokemons__pokedex}>
				<img className={style.Pokemon__logo} src={pokedexLogo} alt="Logo Pokedex" data-testid="pokedex-logo" />
			</div>
			<main className={style.Pokemons__gallery}>
				{pokemons.map((pokemon: INamedAPIResource, i) => (
					<PokemonCard key={i} name={pokemon.name} setPokemonSelected={setPokemonSelected} />
				))}
				{pokemonSelected && (
					<MorePokemonDetailsModal details={pokemonSelected} setPokemonSelected={setPokemonSelected} />
				)}
			</main>
		</div>
	);
}
