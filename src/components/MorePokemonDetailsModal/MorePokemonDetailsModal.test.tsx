import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import IPokemon from 'types/IPokemon';
import MorePokemonDetailsModal from './MorePokemonDetailsModal';

describe('<MorePokemonDetailsModal />', () => {
	test('should render correctly a modal pokemon card', () => {
		const data = {
			details: {
				id: 1,
				name: 'dummy name',
				base_experience: 2,
				height: 3,
				is_default: false,
				order: 4,
				weight: 5,
				abilities: [
					{
						is_hidden: false,
						slot: 1,
						ability: {
							name: 'dummy ability name',
							url: 'dummy url',
						},
					},
				],
				forms: [],
				game_indices: [],
				held_items: [],
				location_area_encounters: 'Kanto',
				moves: [],
				sprites: {
					front_default: '',
					front_shiny: '',
					front_female: '',
					front_shiny_female: '',
					back_default: '',
					back_shiny: '',
					back_female: '',
					back_shiny_female: '',
				},
				species: {
					name: 'dummy name',
					url: 'dummy url',
				},
				stats: [],
				types: [],
			},
			setPokemonSelected: (pokemon: IPokemon | undefined) => {},
		};

		render(<MorePokemonDetailsModal {...data} />);

		expect(screen.getByText(/dummy name/)).toBeVisible();
	});
});
