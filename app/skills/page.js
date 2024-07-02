import Image from 'next/image'
import React from 'react'
import { Col, ProgressBar, Row } from 'react-bootstrap'

function page() {
  return (
    <div>
      <div className='w-full text-white bg-zinc-950'>
        <Row className='d-flex items-center justify-center'>
          <Col className='mx-32'>
            <div className='max-w-4xl  px-12 py-12'>
              <h1 className='text-3xl font-bold mb-6'>Skills</h1>

              <h5>React Js</h5>
              <ProgressBar striped variant="dark" now={50} animated />
              <h5 className='mt-5'>Flutter</h5>
              <ProgressBar striped variant="dark" now={47} animated />
              <h5 className='mt-5'>PHP</h5>
              <ProgressBar striped variant="dark" now={26} animated />
              <h5 className='mt-5'>Next Js</h5>
              <ProgressBar striped variant="dark" now={20} animated />
            </div>
          </Col>
          <Col>
            <Image className='py-12' src="/assets/images/4.JPG" alt="React" width={500} height={560} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default page
