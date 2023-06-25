import React from 'react'
import {BsSearch} from 'react-icons/bs'
import {BsCart4} from 'react-icons/bs'
import logo from '../Images/amazon-dark-logo.png'
import { Link } from 'react-router-dom'
import { useAuth } from './Context/GlobalContext'
import { auth } from '../firebase/FirebaseConfig'



const Header = () => {
  const {user, basket} = useAuth();


  const handleLogout =()=>{
   auth.signOut()

  }

  return (
    <div className='header'>
       <Link to='/'>
         <img className='logo' src={logo} alt='no-logo' style={{width:'120px' , height:'60px'}} />
       </Link>
       <div className='searchbar'>
         <input type='text'    /> <BsSearch className='search-icon'/>
       </div>

       <div className='nav-links'>
        <Link to ={!user && '/signin'}>
        
       <div onClick={handleLogout}>
           <div >Hello {user? `${user.email}`: "guest"}</div>
           <div className='links-title'>{user ? "Sign Out" : "Sign In"}</div>
         
       </div>
        </Link>
        {/* <Link to='/orders'>
        
          <div>Returens</div>
          <div className='links-title'>& Orders</div>
        
        </Link>
        
        <Link to='prime'>
        
          <div>Your</div>
          <div className='links-title'>Prime</div>
        
        </Link> */}
        
         <Link to="/cart">
          <div >
           <BsCart4 className='icon-cart'/>
           {basket?.length}
          </div>
         </Link>
       </div>
    </div>
  )
}

export default Header