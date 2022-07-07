import React from 'react'
import {FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

const CommonHeader = () => {
  const nagivate = useNavigate()
  const dispatch = useDispatch()
  const {user} = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    nagivate("/");

  }
  return (
    <header className='header'>
      <div className="logo">
        <Link to = "/">NoteTaker</Link>
        </div>
        <ul>
          { user ? (
            <li><button className='btn' onClick={onLogout}><FaSignOutAlt />Logout</button></li>
          ) : (
            <> 
            <li><Link to="/login"><FaSignInAlt />Login</Link></li>  
            </>
          ) }
          
        </ul>  
    </header>
  )
}

export default CommonHeader