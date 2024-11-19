/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import auth from './../Firebase/firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export const AuthContext=createContext()

const AuthProvider = ({children}) => {
  const [loading,setLoading]=useState(true)
  const[user,setUser]=useState(null)
const handleLogin=(email,password)=>{
  setLoading(true)
  return createUserWithEmailAndPassword(auth,email,password)
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
        name:'sakib',
        handleLogin,
        user,
        loading
    }
    return (
  <AuthContext.Provider value={authInfo}>
{children}
  </AuthContext.Provider>
    );
};

export default AuthProvider;