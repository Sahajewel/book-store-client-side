import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../_firebase.init'
export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
export default function AuthProvider({children}) {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const creatUser=(email,password)=>{
        setLoading(true)
           return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleGoogleProvider = ()=>{
        return signInWithPopup(auth, googleProvider)
    }
 useEffect(()=>{
    const unsubscribe=()=>{
         onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
    }
    return unsubscribe()
 },[])
    const Logout = ()=>{
        setLoading(true)
        return signOut(auth)
    }
  const  AuthInfo={
        creatUser,
        signInUser,
        Logout,
        user, 
        loading,
        handleGoogleProvider

    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
