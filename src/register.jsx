import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth,db} from "../src/assets/firebase/firebasecongfig"
import { setDoc, doc } from "firebase/firestore";
import {Link} from 'react-router-dom'


function Register() {
  const [rollno, setRollNo] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          name: name,
          rollno:rollno,
        });
      }
      alert("User Registered Successfully");
      console.log("User Registered Successfully");
    } catch (error) {
      alert(error.message);
    }
  };


  return (

      <div className="container">
        <div>
            <img src="../public/icon.png" alt="" height='100px'/>
            <h3>Sign Up to Nittfest</h3>
        </div>
        <div className='register-field'>
<form action="" onSubmit={handleRegister}>
<input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
<input type="text" placeholder='Roll Number' onChange={(e)=>setRollNo(e.target.value)}/>
                <input type="text" placeholder='Name'onChange={(e)=>setName(e.target.value)} />
                <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
             
                <div className="buttons">
<button>Register</button>
<Link className='an-link'  to='/login'><p>Already Created?</p></Link>
</div>

     
</form>

        </div>
     
      </div>
    
  )
}

export default Register
