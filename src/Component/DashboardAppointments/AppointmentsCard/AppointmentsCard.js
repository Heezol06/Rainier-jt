import React from 'react';
import './AppointmentsCard.css'

const AppointmentsCard = () => {
    return (
        <div className='rounded shadow-md mt-20 mr-10 p-3 sizing-for-tab'>
            <h6 className='text-left'>Upcoming Appointments</h6>
            {/* card  */}
            <div className='flex rounded-lg shadow-md bg-pink-100 my-3'>
                <div className='rounded-lg bg-white p-2'>
                    <p className='text-gray-400 margin-padding-0'>2022</p>
                    <p className='font-bold margin-padding-0'>13</p>
                    <p className='text-xl text-gray-400 margin-padding-0'>Sep</p>
                </div>
                <div className='rounded-lg mx-2 text-left'>
                    <p className='margin-padding-0'>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium margin-padding-0'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded bg-white'>
                            <p className='font-thin margin-padding-0'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin margin-padding-0'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md bg-pink-100 my-3'>
                <div className='rounded-lg bg-white p-2'>
                    <p className='text-gray-400 margin-padding-0'>2022</p>
                    <p className='font-bold margin-padding-0'>13</p>
                    <p className='text-xl text-gray-400 margin-padding-0'>Sep</p>
                </div>
                <div className='rounded-lg mx-2 text-left'>
                    <p className='margin-padding-0'>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium margin-padding-0'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded bg-white'>
                            <p className='font-thin margin-padding-0'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin margin-padding-0'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md bg-pink-100 my-3'>
                <div className='rounded-lg bg-white p-2'>
                    <p className='text-gray-400 margin-padding-0'>2022</p>
                    <p className='font-bold margin-padding-0'>13</p>
                    <p className='text-xl text-gray-400 margin-padding-0'>Sep</p>
                </div>
                <div className='rounded-lg mx-2 text-left'>
                    <p className='margin-padding-0'>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium margin-padding-0'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded bg-white'>
                            <p className='font-thin margin-padding-0'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin margin-padding-0'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md bg-pink-100 my-3'>
                <div className='rounded-lg bg-white p-2'>
                    <p className='text-gray-400 margin-padding-0'>2022</p>
                    <p className='font-bold margin-padding-0'>13</p>
                    <p className='text-xl text-gray-400 margin-padding-0'>Sep</p>
                </div>
                <div className='rounded-lg mx-2 text-left'>
                    <p className='margin-padding-0'>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium margin-padding-0'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded bg-white'>
                            <p className='font-thin margin-padding-0'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin margin-padding-0'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentsCard;