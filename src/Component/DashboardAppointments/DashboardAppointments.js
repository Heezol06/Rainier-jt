import React from 'react';
import './DashboardAppointment.css'
import AppointmentsCard from './AppointmentsCard/AppointmentsCard';
import CovidBanner from './CovidBanner/CovidBanner';

const DashboardAppointments = () => {
    return (
        <div>
            <AppointmentsCard></AppointmentsCard>
            <CovidBanner></CovidBanner>
        </div>
    );
};

export default DashboardAppointments;