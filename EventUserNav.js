import React from 'react'
import { Link } from 'react-router-dom'

export default function EventUserNav() {
    return (
        <div class="nav">
            <Link to="/bookingHistory" class="navbar-toggler nav-link text-light">BOOKING HISTORY</Link>
        </div>
    )
}
