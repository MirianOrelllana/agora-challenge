
import {
   collection,
   addDoc,
   getDocs,
} from "firebase/firestore";
import { db } from "./firebase";
import notification from '../components/Alert/Alert';
const collectionName = 'usuarios'

export const saveUser = (user) => {
   const agePrm = 100
   const data = {
      ...user,
      ageDied: agePrm - parseInt(user.age)
   }
   addDoc(collection(db, collectionName), data)
      .then((res) => {
         notification(true, 'se agrego correctamente')
         return console.log(res)
      }).catch((err) => {
         return console.log(err)
      })
}
export const getUsers = async () => {

   const tempDoc = []
   return getDocs(collection(db, collectionName))
      .then(async (querySnapshot) => {
         querySnapshot.forEach((doc) => {
            tempDoc.push({ id: doc.id, ...doc.data() })
         })
         notification(true, "Se obtuvieron los datos correctamente")
         return tempDoc

      }).catch((err) => {
         notification(false, "Hubo un error")
         return tempDoc
      })


}

export const getMediaUser = async () => {

   let sumaTotal = 0;
   let total = 0;
   return getDocs(collection(db, collectionName))
      .then(async (querySnapshot) => {
         await querySnapshot.forEach((doc) => {
            let edad = doc.data()['age']
            if (edad) {
               sumaTotal = sumaTotal + parseInt(edad)
            }
            total++
         })
         return sumaTotal / total
      }).catch((err) => {
         return 0
      })
}