import INamedAPIResource from './INameAPIResource';
import { IPokemonHeldItemVersion } from './IPokemonHeldItemVersion';

export default interface IPokemonHeldItem {
	/** The item the referenced Pokémon holds */
	item: INamedAPIResource;
	/** The details of the different versions in which the item is held */
	version_details: IPokemonHeldItemVersion[];
}
