"use client"
import Form from '../app/Form'
import Background from '../app/Background'
import Footer from '../app/Footer'
import Header from './Header'
import Load from './Loading/Load'
import { useState } from 'react'

export default function Home() {

  const [Loading, setLoading] = useState<Boolean>(false);
  
  if (Loading) {
    return (
      <div className="loader-container">
        <Load />
      </div>
    );
  }
  
  return (
    <div className=''>
      <Header />
      <Background />
      <Form />
      <Footer />
    </div>
  );
  
}
