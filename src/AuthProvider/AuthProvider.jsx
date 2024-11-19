/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true)
  const[user,setUser]=useState(null)
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
useEffect(()=>{
  const unSubscribed = onAuthStateChanged(auth,currentUser=>{
    setLoading(false)
setUser(currentUser)
  })
  return ()=>{
    unSubscribed()
  }
},[])
console.log(user)
    const authInfo ={
        name:'sakib',
        handleRegister,
        user,
        loading,
        handleSignOut,
        signInUser,
        setUser,
        updateUserProfile
    }
    return (
  <AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;