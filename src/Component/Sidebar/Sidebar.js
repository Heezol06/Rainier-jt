import React from 'react';
import "./Sidebar.css"
import {
    CDBSidebar,
    CDBSidebarHeader,
    CDBSidebarMenuItem,
    CDBSidebarContent,
    CDBSidebarMenu,
    CDBSidebarFooter,
} from 'cdbreact';

const Sidebar = () => {
    return (
        <CDBSidebar textColor="#333" backgroundColor="#f0f0f0" height="100%" className="sidebar-position">
            <CDBSidebarHeader className="sidebar-logo" prefix={<i className="fa fa-bars" />}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.25 0C11.6533 0 11.081 0.237053 10.659 0.65901C10.2371 1.08097 10 1.65326 10 2.25C10 6.53021 6.53021 10 2.25 10C1.65326 10 1.08097 10.2371 0.65901 10.659C0.237053 11.081 0 11.6533 0 12.25V23.75C0 24.3467 0.237053 24.919 0.65901 25.341C1.08097 25.7629 1.65326 26 2.25 26C6.53021 26 10 29.4698 10 33.75C10 34.3467 10.2371 34.919 10.659 35.341C11.081 35.7629 11.6533 36 12.25 36H23.75C24.3467 36 24.919 35.7629 25.341 35.341C25.7629 34.919 26 34.3467 26 33.75C26 29.4698 29.4698 26 33.75 26C34.3467 26 34.919 25.7629 35.341 25.341C35.7629 24.919 36 24.3467 36 23.75V12.25C36 11.6533 35.7629 11.081 35.341 10.659C34.919 10.2371 34.3467 10 33.75 10C29.4698 10 26 6.53021 26 2.25C26 1.65326 25.7629 1.08097 25.341 0.65901C24.919 0.237053 24.3467 0 23.75 0H12.25Z" fill="url(#paint0_linear_3_10372)" />
                    <defs>
                        <linearGradient id="paint0_linear_3_10372" x1="7.01078" y1="12.1538" x2="51.3099" y2="13.3666" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FF7594" />
                            <stop offset="0.536458" stop-color="#FF797B" />
                            <stop offset="1" stop-color="#FF7C65" />
                        </linearGradient>
                    </defs>
                </svg>
                <p>Medi<span className='Hot-Pink'>Doc</span></p>
            </CDBSidebarHeader>
            <CDBSidebarContent style={{ paddingTop: "40%", paddingBottom: "100%" }}>
                <CDBSidebarMenu >
                    <CDBSidebarMenuItem icon="home" className="hover:Hot-Pink">Home</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="user">Patient Profile</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="calendar" >Appointments</CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="undo" iconType="solid">
                        Medical History
                    </CDBSidebarMenuItem>
                    <CDBSidebarMenuItem icon="gear" iconType="solid">
                        Settings
                    </CDBSidebarMenuItem>
                </CDBSidebarMenu>
            </CDBSidebarContent>

            <CDBSidebarFooter style={{ textAlign: 'center' }}>
                <div
                    className="sidebar-btn-wrapper"
                    style={{ padding: '20px 5px' }}
                >
                    <svg width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_2_10333)">
                            <rect x="2" y="1" width="53" height="53" rx="26.5" fill="url(#paint0_linear_2_10333)" />
                            <g filter="url(#filter1_b_2_10333)">
                                <rect x="13" y="12" width="31" height="31" rx="15.5" fill="url(#paint1_radial_2_10333)" />
                                <path d="M28.625 27.375V23H27.375V27.375H23V28.625H27.375V33H28.625V28.625H33V27.375H28.625Z" fill="white" />
                            </g>
                        </g>
                        <defs>
                            <filter id="filter0_d_2_10333" x="0" y="0" width="57" height="57" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dy="1" />
                                <feGaussianBlur stdDeviation="1" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2_10333" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2_10333" result="shape" />
                            </filter>
                            <filter id="filter1_b_2_10333" x="-7" y="-8" width="71" height="71" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImage" stdDeviation="10" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_10333" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_10333" result="shape" />
                            </filter>
                            <linearGradient id="paint0_linear_2_10333" x1="10.4238" y1="-63.4432" x2="81.3675" y2="-49.3123" gradientUnits="userSpaceOnUse">
                                <stop offset="0.00315941" stop-color="#FF7594" />
                                <stop offset="0.942708" stop-color="#FF7C65" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_2_10333" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.8809 13.8926) rotate(41.245) scale(27.5691 59.2288)">
                                <stop stop-color="white" stop-opacity="0.28" />
                                <stop offset="1" stop-color="white" stop-opacity="0.28" />
                            </radialGradient>
                        </defs>
                    </svg>

                </div>
            </CDBSidebarFooter>
        </CDBSidebar>
    );
};

export default Sidebar;