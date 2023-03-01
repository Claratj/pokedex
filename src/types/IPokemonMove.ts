import INamedAPIResource from './INameAPIResource';
import IPokemonMoveVersion from './IPokemonMoveVersion';

export default interface IPokemonMove {
	/** The move the Pokémon can learn */
	move: INamedAPIResource;
	/** The details of the version in which the Pokémon can learn the move */
	version_group_details: IPokemonMoveVersion[];
}
