import React, { useState } from 'react'
import axios from 'axios'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {TextField} from '@mui/material'
import Avatar from '@mui/material/Avatar';
import {Button} from "@mui/material"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState('')
    const history = useNavigate();
    const HandleLogin = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:4000/', 
        {
            email:email, 
            pass:pass
        })
        .then(response=>{
            // window.alert(response.data.username)
            // console.log(response);
            if(response.data.msg==='user found'){
                    history('/dashboard', {state:{username:response.data.username}});
                }
        })
        .catch(error=>{
            console.log(error);
        })
    }

  return (
    <div className='login-container'>
        <div className="image">
            <h2>create <br /> your best <br />version</h2>
            <div className="quotes">
                <h5>❝ Great Things Takes Time ❞</h5>
                <p>-Alexander Graham Bell</p>
            </div>
        </div>
        <div className="form">
                <Link to='/signUp' style={{color:"white",textDecoration:"none"}}>
                <Button
                    className='signup'
                    type="submit"
                    fullWidth
                    variant="contained"
                    // sx={{ mt: 3, mb: 2 }}
                    >
                        Signup
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
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
                Login
                </Button>
            </form>
        </div>
    </div>
  )
}

export default Login