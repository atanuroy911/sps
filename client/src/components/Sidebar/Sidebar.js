import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    let activeClassName = "text-pink-500 hover:text-pink-600 ";
    let inActiveClassName = "text-gray-700 hover:text-gray-500 ";
    let defaultStyle = "text-xs uppercase py-3 font-bold block";
    return (
        <div className='col-span-2'>
            <nav className="h-screen md:left-0 md:block md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                    >
                        <i className="fas fa-bars" />
                    </button>
                    {/* Brand */}
                    <NavLink
                        className="hidden md:block text-center md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="#"
                    >
                        Welcome Admin
                    </NavLink>
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            <app-notification-dropdown />
                        </li>
                        <li className="inline-block relative">
                            <app-user-dropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div className="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <NavLink
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="#"
                                    >
                                        Welcome Admin
                                    </NavLink>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* <!--Navigation  */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/home"
                                >
                                    <i className="fas fa-tv opacity-75 mr-2 text-sm" />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li className="items-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/vehicles"
                                >
                                    <i className="fas fa-car text-blueGray-400 mr-2 text-sm" />
                                    Vehicles Registered
                                </NavLink>
                            </li>
                            <li className="items-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/users"
                                >
                                    <i className="fas fa-user text-blueGray-400 mr-2 text-sm" />
                                    Users Registered
                                </NavLink>
                            </li>
                            <li className="items-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/parking"
                                >
                                    <i className="fas fa-square-parking text-blueGray-400 mr-2 text-sm" />
                                    Parking Lots
                                </NavLink>
                            </li>
                            <li className="items-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/earning"
                                >
                                    <i className="fas fa-sack-dollar text-blueGray-400 mr-2 text-sm" />
                                    Earnings
                                </NavLink>
                            </li>

                        </ul>
                        {/*Divider */}
                        <hr className="my-12 md:min-w-full" />
                        {/*Heading */}
                        <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-8 no-underline">
                            Account Settings
                        </h6>
                        {/*Navigation */}
                        <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                            <li className="inline-flex items-center justify-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle}
                                    to="/dashboard/change-pass"
                                >
                                    <i className="fas fa-paint-brush mr-2 text-blueGray-400 text-base" />
                                    Change Password
                                </NavLink>
                            </li>
                            <li className="inline-flex items-center justify-center">
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? activeClassName + defaultStyle : inActiveClassName + defaultStyle} to="/logout"
                                >
                                    <i className="fas fa-arrow-right-from-bracket mr-2 text-blueGray-400 text-base" />
                                    Log Out
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div >
    );
};

export default Sidebar;