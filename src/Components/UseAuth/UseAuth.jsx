import React, { useContext } from 'react'
import { AuthContext } from '../../AuthProvider/AuthProvider'

export default function UseAuth() {
   const context = useContext(AuthContext)
   return context
}
