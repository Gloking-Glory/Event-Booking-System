import React from 'react'
import { Link } from 'react-router-dom'

export default function EventAdminNav({bookedHall}) {
    let length = bookedHall.length;
    return (
        <div class="nav">
            <Link to="/bookingRequest" class="navbar-toggler nav-link text-light">REQUESTED BOOKING <sup>{length}</sup> </Link>
            <Link to="/bookingHistory" class="navbar-toggler nav-link text-light">BOOKING HISTORY</Link>
        </div>
    )
}