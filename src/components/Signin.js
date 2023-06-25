import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../Images/Amazon-logo.png'
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth"
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/FirebaseConfig'


const Signin = () => {

  
  const [emailValue , setEmailValue] = useState('');
  const [passwordValue , setPasswordValue] = useState('');
  const navigate = useNavigate();

  const handleregister = (e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth,emailValue, passwordValue).then((auth)=>
    {
      if(auth){
        navigate('/');
      }
    }).catch((error)=>{
      alert(error.message)
    })
  };


  const handleSignIn = (e) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth , emailValue , passwordValue).then((auth)=>{
      if(auth){
        navigate('/');
      }
    }).catch((error)=>{
      alert(error.message)

    })
  }
 

  return (
    <div className='singin'>
      <Link to='/'>
         <img src={logo} alt='no-logo' style={{width:'150px' , height:'50px'}} />
       </Link>
      <div className='login'>
        <div className='container'>
          <h2>Sign In</h2>

          <div className='form'>
            <h5>E-mail</h5>
            <input type='email' value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/>
          </div>


          <div className='form'>
            <h5>Password</h5>
            <input type='password' value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)} />
          </div>

         <div className='form'>
           <Link>
           <button onClick={handleSignIn}>Sign IN</button>
           </Link>
           <p>By continuing you agree to Amazon'sfake Clone Conditions of Use and Privacy Notice</p>
           <Link>
           <button className='signin-btn' onClick={handleregister}>Create your Amazon Account</button>
           </Link>
         </div>
        </div>
      </div>
    </div>
  )
}

export default Signin