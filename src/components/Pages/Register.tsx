import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import axios from 'axios';
import "../Styles/Login.css";




function Register() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [registerstatus, setRegisterStatus] = useState('')
  const [message, setMessage] = useState("");
  
  function handleSubmit(eventKey: any, e: any) {
    e.preventDefault();
    axios.post('http://blackzspace.de:8080/register', {username, password, email})
    .then((res: any) => console.log(res))
    .catch((err: any) => console.log(err))    
    console.log(
        "Console > setRegistered!"
         );
        
       
        
           
  

  }

 // const [message, setMessage] = useState("");
 // useEffect(() => {
 //  document.title = "bS | Register 🔑";
 //  fetch('https://blackzspace.de:8081/register')
 //  .then((res) => res.json())
 //  .then((data) => setMessage(data.message));
 //  console.log(
 //  "Console > Register!"
 //   );
 //  }, []);


  
  return (
    
    <div className="Register-header">
        <Container maxWidth="sm">
            <Box sx={{ my: 4 }}>
              <Typography
                align="center"
                variant="h4"
                component="h1"
                gutterBottom
              >
                Register
              </Typography>
            </Box>
          </Container>
      <div className="register">
        <form onSubmit={(e) => handleSubmit(e, "form-control")}>
          <div>
          <center><p>{message}</p></center>

      <label htmlFor="username">Username</label>
      <input type="username" placeholder="Enter Username" className="form-control"
      onChange={e => setUsername(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="password">Password</label>
      <input type="password" placeholder="Enter Password" className="form-control"
      onChange={e => setPassword(e.target.value)}/>
      </div>
      <div>
      <label htmlFor="email">Email</label>
      <input type="email" placeholder="Enter Email" className="form-control"
      onChange={e => setEmail(e.target.value)}/>
      </div>
      <button className="btn btn-success" type="submit">Register</button>
   
      </form>
        </div>
        </div>
  );
}

export default Register;