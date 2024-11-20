/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true)
  const[user,setUser]=useState(null)
  const[email,setEmail]=useState('')
  const googleProvider = new GoogleAuthProvider();
const handleRegister=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
}
const signInUser=(email,password)=>{
  return signInWithEmailAndPassword(auth,email,password)
}
const updateUserProfile=(updatedData)=>{
return updateProfile (auth.currentUser,updatedData)
}
const handleSignOut=()=>{
  return signOut(auth)
}
const signWithGoogle=()=>{
  return signInWithPopup(auth,googleProvider)
}
const passwordReset =(email)=>{
return sendPasswordResetEmail(auth,email)
}
useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth,currentUser=>{
    setLoading(false)
setUser(currentUser)
  })
  return ()=>{
    unSubscribed()
  }
},[])

    const authInfo ={
        handleRegister,
        user,
        loading,
        handleSignOut,
        signInUser,
        setUser,
        updateUserProfile,
        signWithGoogle,
        email,
        setEmail,
        passwordReset
          }
    return (
  <AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;