import { render, screen } from '@testing-library/react';
import pokedexLogo from './images/pokedex_logo.png';
import PokemonsPage from './Pokemons.page';

describe('<PokemonsPage />', () => {
	test('should show the pokedex logo when rendered', () => {
		render(<PokemonsPage />);
		expect(screen.getByTestId('pokedex-logo').getAttribute('src')).toContain(pokedexLogo);
	});
});
