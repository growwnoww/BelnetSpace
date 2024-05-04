import { BorderBeamDemo } from '@/components/ContactUs/BorderBeamDemo'
import { ContactForm } from '@/components/ContactUs/ContactForm'
import Info from '@/components/ContactUs/Info'

import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js'

const Page = () => {
  return (
    <div className='mt-24'>
      <div className='w-full  flex items-center justify-center mb-10'>
        <p className='text-4xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 border-b-4 border-yellow-500 w-fit '>Contact Us</p>
      </div>
      <div className=' grid grid-cols-1 lg:grid-cols-2 bg-black gap-y-6'>
       
        <Info/>
        <ContactForm/>
    </div>
    </div>
   
  )
}

export default Page