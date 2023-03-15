import React, {useState, useContext} from 'react'
import axios from 'axios'
import {  useNavigate } from 'react-router-dom'
import { AuthContext } from "../../context/authContext";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "./login.scss";


function Login() {

const [email, setEmail] = useState("")
const [password, setPassword] = useState("")


const handleEmail = (e) => setEmail(e.target.value)
const handlePassword = (e) => setPassword(e.target.value)


const {authenticateUser} = useContext(AuthContext)

const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post(`${process.env.REACT_APP_API}/auth/login`, {email, password})


        localStorage.setItem("authToken", response.data.authToken)

        authenticateUser()

       
        navigate('/profile');
    } catch (error) {
        console.log(error)
    }


}

const navigate = useNavigate()

    return (
    
      <Container component="main" maxWidth="sm" >
        <Box 
          sx={{
            boxShadow: 7,
            borderRadius: 2,
            px: 4,
            py: 6,
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            <b>Login CreAIte</b>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmail}
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePassword}
              autoComplete="current-password"
            />
            
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }
















































export default Login