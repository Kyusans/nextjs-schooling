"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Page() {

  useEffect(() => {
    if(localStorage.getItem("url") !== "http://localhost/schooling/api/"){
      localStorage.setItem("url", "http://localhost/schooling/api/");
    }
  },[]);
  return (
    <div className='d-flex justify-content-center align-items-center h-screen text-center'>

    </div>
  )
}

export default Page