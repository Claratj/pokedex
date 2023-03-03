import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import PokemonCard from './PokemonCard';

describe('<PokemonCard />', () => {
	test('should render correctly when it has the correct data', () => {
		const data = {
			name: 'bulbasur',
			setPokemonSelected: () => {},
		};

		render(<PokemonCard {...data} />);

		expect(screen.getByText(/bulbasur/)).toBeVisible();
	});

	test('should show loading when it does not find the pokemon image', async () => {
		const data = {
			name: '',
			setPokemonSelected: () => {},
		};

		render(<PokemonCard {...data} />);

		expect(screen.getByText('loading...')).toBeVisible();
	});

	test('should not show a name on the card when there ir none', async () => {
		const data = {
			name: '',
			setPokemonSelected: () => {},
		};

		render(<PokemonCard {...data} />);

		expect(screen.getByTestId('card-figcaption-name')).toHaveTextContent('');
	});
});
