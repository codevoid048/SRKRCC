
import { Route, Routes } from 'react-router-dom'
import Affiliates from './Affiliates/Affliates';
import AdminLayout from './Sidebar';
import DashboardPage from './Dashboard/Dashboard';
import EventsManagement from './Events/Event';
import HomepageManagement from './Homepage/Homepage';
import RegistrationManagement from './Registrations/Registrations';
import TeamManagement from './Team/Team';

const Admin = () => {
  return (
    <div>
        <AdminLayout/>
        <Routes>
            <Route path="dashboard" element={<DashboardPage/>} />
            <Route path="homepage" element={<HomepageManagement/>} />
            <Route path="affiliates" element={<Affiliates />} />
            <Route path="events" element={<EventsManagement/>} />
            <Route path="registration" element={<RegistrationManagement/>} />
            <Route path="team" element={<TeamManagement/>} />
        </Routes>
    </div>
  )
}


export default Admin;
