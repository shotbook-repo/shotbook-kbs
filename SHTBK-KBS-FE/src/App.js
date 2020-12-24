import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';
import FacilitiesPage from './views/FacilitiesPage';
import DashboardPage from './views/DashboardPage';
import EventPage from './views/EventPage';
import MarketingPage from './views/MarketingPage';
import UserAccessPage from './views/UserAccess';
import AnnouncementPage from './views/AnnouncementPage';
import ShotbookUserPage from './views/ShootbookUser';
import SportCenterPage from './views/SportCenters';
import SelectedFacilityPage from './views/FacilitiesPage/SelectedFacilityPage';

function App() {
	return (
		<Router>
			<div className='App'>
				<div className='flex w-full'>
					<Sidebar />
					<Switch>
						<Route path='/dashboard'>
							<DashboardPage />
						</Route>
						<Route path='/sport_center'>
							<SportCenterPage />
						</Route>
						<Route path='/shotbook_user'>
							<ShotbookUserPage />
						</Route>
						<Route exact path='/venue'>
							<FacilitiesPage />
						</Route>
						<Route
							path='/venue/:id'
							children={<SelectedFacilityPage />}
						></Route>
						<Route path='/announcement'>
							<AnnouncementPage />
						</Route>
						<Route path='/event'>
							<EventPage />
						</Route>
						<Route path='/marketing'>
							<MarketingPage />
						</Route>
						<Route path='/user_access'>
							<UserAccessPage />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
