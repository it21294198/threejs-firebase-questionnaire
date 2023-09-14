"use client"
// import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from '../app/config/firebase'
import { doc, setDoc } from "firebase/firestore"; 

export default function Home() {

  const clicked = async () => {

    // const docRef = await addDoc(collection(firestore, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan"
    // });
    // console.log("Document written with ID: ", docRef.id);

    await setDoc(doc(firestore, "cities", "dfA"), {
      name: "Los fsAngeles",
      state: "CAff",
      country: "USA"
    })
    console.log('doc is added');

  }

  return (
    <>
    <button onClick={clicked} className="btn btn-primary">Click</button>
    </>
  )
}
