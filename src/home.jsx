import React, { useEffect, useState } from 'react';
import { auth, db } from './assets/firebase/firebasecongfig';
import { doc, getDoc } from 'firebase/firestore';
import logo from '/icon.png'

function Home() {
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        try {
          const docRef = doc(db, "Users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setUserDetails(docSnap.data()); // Store the user's data
          } else {
            console.log("No such document!");
          }
        } catch (error) {
          console.error("Error fetching user data: ", error);
        }
      } else {
        console.log("No user is signed in.");
      }
    });

    return () => unsubscribe();
  }, []); // Add dependency array to avoid infinite re-renders

  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="logo" /> {/* Corrected image reference */}
        </div>
        <div className="nav-items">
          <a className="gradient-text" href="">Home</a>
          <a className="gradient-text" href="">Quiz</a>
          <a className="gradient-text" href="">About</a>
          {/* Display user name or email if available */}
          {userDetails ? <h2 className="gradient-text">{userDetails.name || userDetails.email}</h2> : null}
        </div>
      </div>

      <div className="content">
        <div className="type-text gradient-text">
          <h2>Welcome to NF'25</h2>
        </div>
        <div className="quiz-content">
          <div>
            <h3>Welcome to Nittfest 25 Quiz</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta non atque obcaecati laudantium dolorum nostrum ab architecto nobis sapiente, rem quo possimus esse nemo nisi. Voluptatibus sapiente hic molestias incidunt!
            </p>
          </div>
          <div className="quiz-start-btn">
            <h2>See You there in Inductions</h2>
            <button>Start Quiz</button>
          </div>
        </div>
      </div>
      {/* <p className='footer'>Made with ❤️ by Sanjai </p> */}
    </div>
  );
}

export default Home;
