"use client";
import React from 'react'
import { Container, Form, Button } from 'react-bootstrap';

function page() {
  return (
    <div>
      <div className='w-full text-white'>
        <div className="w-full bg-zinc-950">
          <Container className='mx-auto px-4 py-12 '>
            <h1 className='text-3xl font-bold mb-6'>Contact Me</h1>
            <div className='mb-6'>
              <Form>
                <Form.Group className='mb-6'>
                  <Form.Label>Your Name</Form.Label>
                  <Form.Control type='text' placeholder='Enter your name' />
                </Form.Group>
                <Form.Group className='mb-6'>
                  <Form.Label>Your Email</Form.Label>
                  <Form.Control type='email' placeholder='Enter your email' />
                </Form.Group>
                <Form.Group className='mb-6'>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as='textarea' rows={5} placeholder='Enter your message' />
                </Form.Group>
                <Button variant='outline-light' type='submit'>
                  Send Message
                </Button>
              </Form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default page
