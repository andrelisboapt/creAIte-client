import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Signup() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  
  const handleFirstName = (e) => setFirstName(e.target.value)
  const handleLastName = (e) => setLastName(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handlePassword = (e) => setPassword(e.target.value)

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
        const response = await axios.post(`${import.meta.env.VITE_API_URL}/auth/signup`, {firstName, lastName, email, password});
        console.log(response.data)
        navigate('/login');
    } catch (error) {
        console.log(error)
    }
  }










  return (
<Container component="main" maxWidth="sm">
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
            <b>Signup</b>
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '52ch' }}>
            <TextField
              margin="dense"
              required
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="firstName"
              onChange={handleFirstName}
              size="small"
              autoFocus
              margin-right="10px"
            />
            <TextField
              margin="dense"
              required
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lastName"
              onChange={handleLastName}
              size="small"
              autoFocus
            />
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
              Create account
            </Button>
            <Grid container>
              
              <Grid item>
                <Link href="/login" variant="body2">
                  {"Already have an account? Login"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    );
  }






























































/* 



















































    <section>
        <h1>Signup</h1>

        <form onSubmit={handleSubmit}>
        <label htmlFor='firstName'>First Name</label>
        <input type="text" name="firstName" id="firstName" value={firstName} onChange={handleFirstName} />

        <label htmlFor='lastName'>Last Name</label>
        <input type="text" name="lastName" id="lastName" value={lastName} onChange={handleLastName} />

        <label htmlFor='email'> Email</label>
        <input type="email" name="email" id="email" value={email} onChange={handleEmail} />

        <label htmlFor='password'> Password</label>
        <input type="password" name="password" id="password" value={password} onChange={handlePassword} />


        <button type="submit">Create account</button>

        </form>

        <p>Already have an account?</p>
        <Link to="/login">Login</Link>



    </section>
  )
} */

export default Signup