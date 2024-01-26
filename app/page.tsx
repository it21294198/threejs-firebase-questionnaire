"use client"
import Form from '../app/Form'
import Background from '../app/Background'
import Footer from '../app/Footer'
import Header from './Header'

export default function Home() {

  return (
    <div className=''>
      <div className='absolute w-full top-0'>
        <Header/>
      </div>
      <div className=''>
        <Background/>
      </div>
      <div className=''>
        <Form/>
      </div>
      <div className='w-full bottom-0'>
        <Footer/>
      </div>
    </div>
  )
}
