import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NotFoundPage from './NotFound.page';

describe('<NotFoundPage />', () => {
	test('should render the NotFounDPage when there is no matching rounte', () => {
		render(<NotFoundPage />, { wrapper: BrowserRouter });

		expect(screen.getByText(/Ups.../)).toBeVisible();
	});
});
