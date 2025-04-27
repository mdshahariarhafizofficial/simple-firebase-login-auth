import React from 'react';
import { NavLink } from 'react-router';

const Tab = () => {
    return (
        <div className='space-x-6'>
            <NavLink className={({isActive})=> 
                isActive? 'bg-blue-600 py-2 px-8 rounded-2xl text-white': ''
                } to="/register">Register</NavLink>
            <NavLink 
            className={({isActive})=> 
                isActive? 'bg-blue-600 py-2 px-8 rounded-2xl text-white': ''
                }
            to="/login">Login</NavLink>
        </div>
    );
};

export default Tab;