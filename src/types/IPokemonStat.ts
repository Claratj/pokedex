import INamedAPIResource from './INameAPIResource';

export interface IPokemonStat {
	/** The stat the Pokémon has */
	stat: INamedAPIResource;
	/** The effort points (EV) the Pokémon has in the stat */
	effort: number;
	/** The base value of the stat */
	base_stat: number;
}
