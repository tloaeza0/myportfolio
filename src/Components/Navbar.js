import React from 'react'

import {
    BrowserRouter as Router,
    Outlet,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
const Navbar = () => {
    return (
        <div>
    <header>
        <nav>
            <ul>
                <li><a href= '/'>Profile</a></li>
                <li><a href= '/Projects'>Projects</a></li>
                <li><a href='/Contact'>Contact Me</a></li>
            </ul>
        </nav>
    </header>
    <Outlet></Outlet>
        </div>
    )
}

export default Navbar