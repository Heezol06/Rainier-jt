import React from 'react';
import DashboardAppointments from '../DashboardAppointments/DashboardAppointments';
import DashboardHome from '../DashboardHome/DashboardHome';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';


const Dashboard = () => {
    const [darkMode, setDarkMode] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const [btnText, setBtnText] = useState("Enable Dark Mode")
    const handleToggleStyle = () => {
        if (darkMode.color === "black") {
            setDarkMode({
                color: "white",
                backgroundColor: "dark"
            })
        }
        else {
            setDarkMode({
                color: "black",
                backgroundColor: "white"
            })
        }
    }
    return (
        <div className='flex' style={darkMode} >
            <Sidebar></Sidebar>
            <DashboardHome></DashboardHome>
            <DashboardAppointments></DashboardAppointments>

        </div>
    );
};

export default Dashboard;