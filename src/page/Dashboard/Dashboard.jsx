import {Outlet} from 'react-router-dom'
import DashboardNav from './DashboardNav';

const Dashboard = () => {
    return (
        <div className='flex gap-10'>
            <DashboardNav></DashboardNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;