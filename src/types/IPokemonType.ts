import INamedAPIResource from './INameAPIResource';

export default interface IPokemonType {
	/** The order the Pokémon's types are listed in */
	slot: number;
	/** The type the referenced Pokémon has */
	type: INamedAPIResource;
}
