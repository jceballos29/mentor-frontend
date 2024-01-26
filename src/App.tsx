import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { challenges } from './utils';

export default function App() {
	return <Routes>
		<Route path="/" element={<Home />} />
		{
			challenges.map((challenge) => (
				<Route key={challenge.id} path={challenge.path} element={<challenge.component />} />
			))
		}
	</Routes>;
}
