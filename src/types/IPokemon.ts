import INamedAPIResource from './INameAPIResource';
import IPokemonAbility from './IPokemonAbility';
import IPokemonHeldItem from './IPokemonHeldItem';
import IPokemonMove from './IPokemonMove';
import IPokemonSprites from './IPokemonSprites';
import { IPokemonStat } from './IPokemonStat';
import IPokemonType from './IPokemonType';
import IVersionGameIndex from './IVersionGameIndex';

export default interface IPokemon {
	/** The identifier for this resource */
	id: number;
	/** The name for this resource */
	name: string;
	/** The base experience gained for defeating this Pokémon */
	base_experience: number;
	/** The height of this Pokémon in decimetres */
	height: number;
	/** Set for exactly one Pokémon used as the default for each species */
	is_default: boolean;
	/** Order for sorting. Almost national order, except families are grouped together */
	order: number;
	/** The weight of this Pokémon in hectograms */
	weight: number;
	/** A list of abilities this Pokémon could potentially have */
	abilities: IPokemonAbility[];
	/** A list of forms this Pokémon can take on */
	forms: INamedAPIResource[];
	/** A list of game indices relevent to Pokémon item by generation */
	game_indices: IVersionGameIndex[];
	/** A list of items this Pokémon may be holding when encountered */
	held_items: IPokemonHeldItem[];
	/** A link to a list of location areas, as well as encounter details pertaining to specific versions */
	location_area_encounters: string;
	/** A list of moves along with learn methods and level details pertaining to specific version groups */
	moves: IPokemonMove[];
	/** A set of sprites used to depict this Pokémon in the game.
	 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
	 */
	sprites: IPokemonSprites;
	/** The species this Pokémon belongs to */
	species: INamedAPIResource;
	/** A list of base stat values for this Pokémon */
	stats: IPokemonStat[];
	/** A list of details showing types this Pokémon has */
	types: IPokemonType[];
}
