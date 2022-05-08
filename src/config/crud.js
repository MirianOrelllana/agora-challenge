import React from 'react'
import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
  } from "firebase/firestore";
  import { db } from "./firebase";
const collectionName = 'usuarios'

export const saveUser = (user) => {
    addDoc(collection(db,collectionName), user)
    .then((res) => {
       return console.log(res)
    }).catch((err) => {
       return console.log(err)
    })
}
export const getUsers = async() => {
    // const usuario = await getDocs(collection(db,collectionName))

    getDocs(collection(db,collectionName)).then((querySnapshot) => {
        const tempDoc = []
        querySnapshot.forEach((doc) => {
           tempDoc.push({ id: doc.id, ...doc.data() })
        })
        console.log(tempDoc)
     })
   

}