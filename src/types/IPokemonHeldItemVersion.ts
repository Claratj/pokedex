import INamedAPIResource from './INameAPIResource';

export interface IPokemonHeldItemVersion {
	/** The version in which the item is held */
	version: INamedAPIResource;
	/** How often the item is held */
	rarity: number;
}
