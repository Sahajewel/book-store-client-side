import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../_firebase.init'
import axios from 'axios'
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
    const handleUpdateUser=(name, photo)=>{
   setLoading(true)
      return  updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
      }
 useEffect(()=>{
    const unsubscribe=()=>{
         onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            if(currentUser?.email){
              const user = {email: currentUser.email}
              axios.post("http://localhost:5000/jwt",user,{
                withCredentials: true
              })
              .then((res)=>{
                console.log(res.data)
                setLoading(false)
              })
            }
            else{
              axios.post("http://localhost:5000/logout",{},{
                withCredentials:true
              })
              .then((res)=>{
                console.log(res.data)
                setLoading(false)
              })

            }
           
           
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
        handleGoogleProvider,
        handleUpdateUser

    }
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}
