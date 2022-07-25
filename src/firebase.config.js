// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// import function for getting database
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBUtna2zjY2BBAFb-c7i4sfVbPbLj6LfXw',
  authDomain: 'house-marketplace-app-570db.firebaseapp.com',
  projectId: 'house-marketplace-app-570db',
  storageBucket: 'house-marketplace-app-570db.appspot.com',
  messagingSenderId: '659856610722',
  appId: '1:659856610722:web:2d44c41b83449fdbba8efb'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
