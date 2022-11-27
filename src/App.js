
import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';

const auth =getAuth(app);
function App() {
   const [user,setUser]=useState([])

  const  provider= new GoogleAuthProvider()
  const handleGoogleSingin=()=>{
    console.log('google')
    signInWithPopup(auth,provider)
    .then(result=>{
       const user=result.user;
       setUser(user)
       console.log(user)
    })
    .catch(error=>{
      console.log('error',error);
    })
  }

  const handleSignOut=()=>{
     signOut(auth)
     .then(()=>{
      setUser({});
     })
     .catch(()=>{
      setUser([])
     })
    
    
  }

  return (
    <div className="App">
      { user.email ?
          <button onClick={handleGoogleSingin}>Google sign im</button>
         : <button onClick={handleSignOut}>Sing out</button>
      }
    
      { user.email && <div>
       <h3>user: {user.displayName}</h3> 
       <p>email: {user.email}</p>
       <img src={user.photoURL}  alt=""/>
      </div>}
    </div>
  );
}

export default App;
