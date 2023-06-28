import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css"
import { ReorderOutlined } from '@mui/icons-material';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setExpandNavbar(false);
    }, [location]);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "closed"}>
        <div className='toggle-button'>
            <button onClick={() => {setExpandNavbar((prev) => !prev)}}>
                <ReorderOutlined />
            </button>
        </div>
        <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar
