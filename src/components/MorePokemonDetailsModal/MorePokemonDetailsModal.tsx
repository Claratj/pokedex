import IPokemon from 'types/IPokemon';
import style from './MorePokemonDetailsModal.module.scss';

interface IMorePokemonDetailsModal {
	details: IPokemon;
	setPokemonSelected: (pokemonDetails?: IPokemon) => void;
}

export default function MorePokemonDetailsModal({ details, setPokemonSelected }: IMorePokemonDetailsModal) {
	return (
		<>
			<div className={style.ModalOverlay}></div>
			<div className={style.ModalCard}>
				<div className={style.ModalCard__info}>
					<div className={style.ModalCard__img_container}>
						<img className={style.ModalCard__img} src={details.sprites.front_default} alt={`${details.name} pokemon`} />
					</div>
					<figcaption className={style.ModalCard__caption}>
						<h1 className={style.ModalCard__name}>{details.name}</h1>

						<table className={style.ModalCard__table}>
							<tbody>
								<tr>
									<th>Experience:</th>
									<td>
										<span>{details.base_experience}</span>
									</td>
								</tr>
								<tr>
									<th>Abilities: </th>
									<td>
										<ul className={style.ModalCard__list}>
											{details.abilities?.map((ability, i) => (
												<li key={`pokemon-${details.name}-${ability}-${i}`}>{ability.ability.name}</li>
											))}
										</ul>
									</td>
								</tr>
							</tbody>
						</table>
					</figcaption>
				</div>
				<button className={style.ModalCard__button} onClick={() => setPokemonSelected()}>
					close
				</button>
			</div>
		</>
	);
}
