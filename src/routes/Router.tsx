import NotFoundPage from 'pages/NotFoundPage/NotFound.page';
import PokemonsPage from 'pages/PokemonsPage/Pokemons.page';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<PokemonsPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</BrowserRouter>
	);
}
