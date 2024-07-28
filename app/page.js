"use client"
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { Button, Card, FloatingLabel, Form } from 'react-bootstrap'

function Page() {
  const [user, setUser] = useState("hello");
  const [allUsers, setAllUsers] = useState([]);
  const [password, setPassword] = useState("");
  const router = useRouter();
  const getAllUsers = async () => {
    const url = "http://localhost/test/user.php";
    const res = await axios.get(url);
    setAllUsers(res.data);
    console.log(res.data);
  }
  const handleLogin = async () => {
    if (user === "" || password === "") {
      alert("Please enter username and password");
      return;
    } else {
      const userDetails = allUsers.find((users) => users.user === user && users.password === password);
      if (userDetails) {
        localStorage.setItem("user", userDetails.fullName);
        router.push("/dashboard");
      } else {
        alert("Invalid username or password");
      }
    }
    // const url = "http://localhost/test/user.php";
    // const res = await axios.get(url, { params: { user, password } });
    // console.log(res);
    // if (res.data !== 0) {
    //   localStorage.setItem("user", res.data.fullName);
    //   router.push("/dashboard");
    // } else {
    //   alert("Invalid username or password");
    // }
  }

  useEffect(() => {
    getAllUsers();
  }, [])
  return (
    <div className='d-flex justify-content-center align-items-center h-screen text-center'>
      <Card bg='dark' style={{ width: '18rem' }}>
        <Card.Header>
          <Card.Title className='text-white'><h2>Login</h2></Card.Title>
        </Card.Header>
        <Card.Body>
          <Form.Select className='mb-3' value={user} onChange={(e) => setUser(e.target.value)}>
            <option>Open this select menu</option>
            {allUsers.map((user, index) => <option key={index} value={user.user}>{user.user}</option>)}
            {/* 
            <option value="Pitok">Pitok</option>
            <option value="Kulas">Kulas</option>
            <option value="Sabel">Sabel</option> */}
          </Form.Select>
          <Form>
            <FloatingLabel label="Password" className='mb-3'>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FloatingLabel>
            <Button onClick={handleLogin}>Login</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Page