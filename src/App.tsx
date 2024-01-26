import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './components';
import { challenges } from './utils';

const router = createBrowserRouter([
	{
		path: '/',
		Component: Home
	},
	...challenges.map(route => ({ path: route.path, Component: route.component }))
])

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export default function App() {
	return <RouterProvider router={router} />;
}
