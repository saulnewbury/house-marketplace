import { useState, useEffect } from 'react'
import { getAuth } from 'firebase/auth'

export default function Profile() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    const auth = getAuth()
    setUser(auth.currentUser)
  }, [])

  return user ? <h1>{user.displayName}</h1> : 'Not Logged In'
}

// Where Firebase stores your info in the browser
// indexDB / firebaseLocalStorage
