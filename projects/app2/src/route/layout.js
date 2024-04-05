import React from 'react';
import {Outlet,Link} from 'react-router-dom';

const Layout = () =>{
    return(
        <div>
            <nav>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/blogs">Blogs</Link></li>
                <li><Link to="/contact">Contacts</Link></li>
            </nav>
            <Outlet />
        </div>
    )
}

export default Layout;