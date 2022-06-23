import React from 'react';

const AppointmentsCard = () => {
    return (
        <div className='rounded shadow-lg m-5 p-3'>
            <h6>Upcoming Appointments</h6>
            {/* card  */}
            <div className='flex rounded-lg shadow-md bg-pink-100'>
                <div className='rounded-lg bg-white p-3'>
                    <p className='text-gray-400'>2022</p>
                    <p className='font-bold'>13</p>
                    <p className='text-xl text-gray-400'>Sep</p>
                </div>
                <div className='rounded-lg  p-3'>
                    <p>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded me-3 bg-white'>
                            <p className='font-thin me-3'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin pe-3'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md my-3 bg-pink-100'>
                <div className='rounded-lg bg-white p-3'>
                    <p className='text-gray-400'>2022</p>
                    <p className='font-bold'>13</p>
                    <p className='text-xl text-gray-400'>Sep</p>
                </div>
                <div className='rounded-lg  p-3'>
                    <p>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded me-3 bg-white'>
                            <p className='font-thin me-3'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin pe-3'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md my-3 bg-pink-100'>
                <div className='rounded-lg bg-white p-3'>
                    <p className='text-gray-400'>2022</p>
                    <p className='font-bold'>13</p>
                    <p className='text-xl text-gray-400'>Sep</p>
                </div>
                <div className='rounded-lg p-3'>
                    <p>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded me-3 bg-white'>
                            <p className='font-thin me-3'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin pe-3'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex rounded-lg shadow-md bg-pink-100'>
                <div className='rounded-lg bg-white p-3'>
                    <p className='text-gray-400'>2022</p>
                    <p className='font-bold'>13</p>
                    <p className='text-xl text-gray-400'>Sep</p>
                </div>
                <div className='rounded-lg  p-3'>
                    <p>Dr. Muhammad Abdul Hussein</p>
                    <p className='font-medium'>Cardiologist</p>
                    <div className='flex justify-between'>
                        <p className='flex justify-between rounded me-3 bg-white'>
                            <p className='font-thin me-3'>Slot</p>
                            Morning
                        </p>
                        <p className='flex justify-between bg-white rounded'>
                            <span className='font-thin pe-3'>Time</span>
                            10.00 AM
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AppointmentsCard;