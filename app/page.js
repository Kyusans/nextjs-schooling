"use client"
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ModeToggle } from '@/components/ui/mode-toggle';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Page() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    if (localStorage.getItem("url") !== "http://localhost/schooling/api/") {
      localStorage.setItem("url", "http://localhost/schooling/api/");
    }
  }, []);
  return (
    <>
      <header>
        <ModeToggle />

      </header>
      <main>
        <div className='flex justify-center items-center h-screen'>
          <Card>
            <CardContent className="flex flex-col gap-4 ">
              <Label className="text-2xl">Login</Label>
              <Input
                className="w-80"
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  )
}

export default Page