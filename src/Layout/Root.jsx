import React from 'react';
import Tab from '../Components/Menu/Tab';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-sm mx-auto mt-40 p-5 rounded-xl bg-white text-black'>
            <Tab></Tab>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;