import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
  return (
   <div className="app">
     <div className="container">
    <div>
        <img src="/icon.png" alt="" height='100px'/>
        <h3>Login to Nittfest</h3>
    </div>
    <div className='register-field'>
  <form action="">
  <input type="text" placeholder='Email' />
           
           <input type="text" placeholder='Password' />
           <div className="buttons">
        <button>Log In</button>
        <Link to='/' className='an-link'><p>Don't Have Account?</p></Link>
      
    </div>
  </form>
    </div>

  </div>
   </div>
  )
}

export default Login
