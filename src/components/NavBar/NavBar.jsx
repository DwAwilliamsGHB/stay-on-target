import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { Stack } from '@mui/material'
import Logo from '../../assets/Logo/logo.png';


export default function NavBar({ user, setUser }) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        <Stack
            direction="row" 
            justifyContent="space-around" 
            sx={{ gap: { sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, 
            justifyContent: 'none' }} 
            px="20px"
        >
            <Link to="/">
                <img src={Logo} alt="logo" style={{ width: '100px', height: '100px', margin: '10px 20px' }} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end"
            >
                <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625' }}>Home</Link>
                <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
                <Link to="/about">About</Link>
                Welcome, {user.name}
                <Link to="" onClick={handleLogOut}>Log Out</Link>            
            </Stack>   
        </Stack>
    )
}