import React from 'react'
import { Container } from 'react-bootstrap'

function page() {
  return (
    <div className='min-h-screen w-full'>
      <div className=' mx-auto px-4 py-12 bg-zinc-950 w-full '>
        <Container>
          <h1 className='text-3xl font-bold mb-10'>Education</h1>

          {/* High School */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>High School</h2>
            <p className='text-lg leading-relaxed'>
              Merry Child School, 2013 - 2019
            </p>
          </div>

          {/* Senior High School */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>Senior High School</h2>
            <p className='text-lg leading-relaxed'>
              Merry Child School, 2019 - 2021
            </p>
          </div>

          {/* College/University */}
          <div className='mb-10'>
            <h2 className='text-xl font-bold mb-2'>College/University</h2>
            <p className='text-lg leading-relaxed'>
              PHINMA COC, 2022 - Present
            </p>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default page
