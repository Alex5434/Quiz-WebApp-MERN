import React, { useState } from 'react'
import axios from 'axios'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {TextField} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import {Button} from "@mui/material"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState('')

    const HandleLogin = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/signup', 
        {
            username:username,
            email:email,
            pass:pass
        })
        .then(response=>{
            if(response.data.msg==='Account created'){
            navigate('/')
            console.log(response);
        }
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className='login-container'>
        <div className="image">
            <h2>Welcome ! <br />great things<br /> ahead </h2>
            <div className="quotes">
                <h5>❝ Why Not Today ❞</h5>
                <p>-Alexander Graham Bell</p>
            </div>
        </div>
        <div className="form">
                <Link to='/' style={{color:"white",textDecoration:"none"}}>
                <Button
                    className='signup'
                    type="submit"
                    fullWidth
                    variant="contained"
                    >
                        Login
                </Button>
                </Link>
            <div className="avatar">
                <h2>Brand Name</h2>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
                </Avatar>
            </div>
            <form action="" method='POST' onSubmit={HandleLogin}>
              <TextField 
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                autoFocus
                onChange={(e)=>setUsername(e.target.value)}
                />
                <TextField 
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
                />
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={(e)=>setPass(e.target.value)}
                />
                <Button
                type="submit"
                fullWidth
                variant="contained"
                >
                SignUp
                </Button>
            </form>
        </div>
    </div>
  )
}

export default SignUp