import './App.css';
import Sidebar from '../src/components/Sidebar';
import FacilitiesPage from './views/FacilitiesPage';

function App() {
	return (
		<div className='App'>
			<div className='flex w-screen'>
				<Sidebar />
				<FacilitiesPage />
			</div>
		</div>
	);
}

export default App;
