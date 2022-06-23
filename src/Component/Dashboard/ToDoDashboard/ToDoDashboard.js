import React from 'react';

const ToDoDashboard = () => {
    return (
        <div className='my-5 p-3 rounded-lg shadow-md w-full' style={{ paddingBottom: "50px" }}>
            <h5 className='text-2xl text-start'>To-Do List</h5>
            <div className='flex justify-between'>
                <input type="text" className='border-1 w-full h-16' />
                <div>
                    <button className='text-lime-50npm ml-5 p-2 px-4 custom-btn rounded-lg text-white'>
                        <svg className='me-3' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75359 7.50001C3.59259 7.50001 3.43859 7.43351 3.32834 7.31626L0.491589 4.29518C0.270505 4.06068 0.282755 3.69143 0.517255 3.47093C0.752339 3.25043 1.12159 3.2621 1.34151 3.4966L3.74776 6.05801L8.65242 0.690182C8.87059 0.451598 9.23926 0.435848 9.47726 0.652848C9.71467 0.869848 9.73101 1.2391 9.51401 1.47651L4.18409 7.30985C4.07501 7.43001 3.91984 7.49885 3.75767 7.50001H3.75359Z" fill="#FBFBFB" />
                        </svg>
                        Add</button>
                </div>
            </div>
            <div className='flex justify-between my-3'>
                <div>
                    <input type="checkbox" className='text-pink-300 me-2' name="Select All" id="" />
                    <label for="Select All">Select All</label>
                </div>
                <button className='text-lime-50npm ml-5 p-2 px-4 custom-btn rounded-lg text-white'>
                    <svg className='me-3' width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75359 7.50001C3.59259 7.50001 3.43859 7.43351 3.32834 7.31626L0.491589 4.29518C0.270505 4.06068 0.282755 3.69143 0.517255 3.47093C0.752339 3.25043 1.12159 3.2621 1.34151 3.4966L3.74776 6.05801L8.65242 0.690182C8.87059 0.451598 9.23926 0.435848 9.47726 0.652848C9.71467 0.869848 9.73101 1.2391 9.51401 1.47651L4.18409 7.30985C4.07501 7.43001 3.91984 7.49885 3.75767 7.50001H3.75359Z" fill="#FBFBFB" />
                    </svg>
                    Done</button>
            </div>
            <div className='flex flex-col' style={{ alignItems: "start" }} >
                <div className='flex align-items-baseline'>
                    <input type="checkbox" className='text-pink-300 me-2' name="Select All" id="" />
                    <label for="Select All" className='me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                    <p className='text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex align-items-baseline'>
                    <input type="checkbox" className='text-pink-300 me-2' name="Select All" id="" />
                    <label for="Select All" className='me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                    <p className='text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex align-items-baseline'>
                    <input type="checkbox" className='text-pink-300 me-2' name="Select All" id="" />
                    <label for="Select All" className='me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                    <p className='text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
                <div className='flex align-items-baseline'>
                    <input type="checkbox" className='text-pink-300 me-2' name="Select All" id="" />
                    <label for="Select All" className='me-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</label>
                    <p className='text-gray-300'>Last Added: 10 sep 2022</p>
                </div>
            </div>
        </div>
    );
};

export default ToDoDashboard;