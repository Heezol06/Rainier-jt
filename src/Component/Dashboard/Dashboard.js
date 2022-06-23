import React from 'react';
import DashboardAppointments from '../DashboardAppointments/DashboardAppointments';
import DashboardHome from '../DashboardHome/DashboardHome';
import Sidebar from '../Sidebar/Sidebar';


const Dashboard = () => {
    return (
        <div className='flex'>
            <Sidebar></Sidebar>
            <DashboardHome></DashboardHome>
            <DashboardAppointments></DashboardAppointments>
        </div>
    );
};

export default Dashboard;