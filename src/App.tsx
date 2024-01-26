import { Route, Routes } from 'react-router-dom';
import { Home } from './components';
import { RecipePage, SocialLinksProfile } from './challenges';

export default function App() {
	return <Routes>
		<Route path="/" element={<Home />} />
		<Route path="/recipe-page" element={<RecipePage />} />
		<Route path="/social-links-profile" element={<SocialLinksProfile />} />
	</Routes>;
}
