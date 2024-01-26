'use client'
import React from 'react'
import { collection, addDoc } from "firebase/firestore"; 
import { firestore } from '../app/config/firebase'

type data = {
}

export default function Form() {

  const clicked = async () => {
  //   const docRef = await addDoc(collection(firestore, "cities"), {
  //     name: "Tokyo",
  //     country: "Japan",
  //     time : new Date()
  //   });
  //   console.log("Document written with ID: ", docRef.id);

  }

  return (
    <>
  <div className="relative w-1/3">
  {/* <div className="absolute left-5 backdrop-blur-xl backdrop-brightness-150 bg-white/10"> */}
          <button onClick={clicked} className="btn btn-primary mt-5">Firebase Click</button>

<div className='grid grid-cols-1'>

    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />

    <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Remember me</span>
    <input type="checkbox" className="checkbox checkbox-warning" />
  </label>
</div>

<select className="select select-success w-full max-w-xs">
  <option disabled>Pick your favorite anime</option>
  <option>One Piece</option>
  <option>Naruto</option>
  <option>Death Note</option>
  <option>Attack on Titan</option>
  <option>Bleach</option>
  <option>Fullmetal Alchemist</option>
  <option>Bizarre Adventure</option>
</select>

<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

<label className="swap swap-flip text-9xl">
  <input type="checkbox" />
  <div className="swap-on">😈</div>
  <div className="swap-off">😇</div>
</label>

<span className="loading loading-infinity loading-lg"></span>

<span className="loading loading-dots loading-lg"></span>

<progress className="progress progress-success w-56" value="100" max="100"></progress>
<progress className="progress progress-secondary w-56" value="70" max="100"></progress>

  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-secondary">4,200</div>
    <div className="stat-desc text-secondary">↗︎ 40 (2%)</div>
  </div>

<div>
  <input type="radio" name="radio-5" className="radio radio-success" />
  <input type="radio" name="radio-5" className="radio radio-success" />
</div>

<div>
  <input type="range" min='0' max="100" className="range range-primary" />
  <input type="range" min={0} max="100" className="range" step="25" />
    <div className="w-full flex justify-between text-xs px-2">
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
      <span>|</span>
    </div>
</div>

<div className="rating">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>

</div>
  </div>
    </>
  )
}
