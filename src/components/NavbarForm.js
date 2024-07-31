import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './NavbarForm.scss'
function NavbarForm() {
  return (
    <div className='nav'>
        <ul>
            <li><Link to="/create" >CreateForm</Link></li>
            <li><Link to="/fill" >FillForm</Link></li>
            <li><Link to="/eval" >EvaluateForm</Link></li>
        </ul>
        <Outlet />
    </div>
  )
}

export default NavbarForm