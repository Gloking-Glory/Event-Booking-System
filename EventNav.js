import React from 'react'
import { Link } from 'react-router-dom'

export default function EventNav() {
    return (
        <div>
            <Link to="/" class="navbar-toggler">REGISTER</Link>
            <Link to="/login" class="navbar-toggler">LOGIN</Link>
            <Link to="/admin" class="navbar-toggler">ADMIN</Link>
            <Link to="/user" class="navbar-toggler">USER</Link>
        </div>
    )
}
