import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { RecipePage } from './challenges';

export default function App() {
	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/recipe-page" element={<RecipePage />} />
	</Routes>;
}
