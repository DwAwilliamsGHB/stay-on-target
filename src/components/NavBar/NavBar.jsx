import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { Stack } from '@mui/material'
import Logo from '../../assets/Logo/logo.png';
import "./NavBar.css"


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
                <img src={Logo} alt="logo" className="logo" style={{ width: '100px', height: '100px'}} />
            </Link>
            <Stack
                direction="row"
                gap="40px"
                fontFamily="Alegreya"
                fontSize="24px"
                alignItems="flex-end"
            >
                <div className="navbar">
                    <Link to="/exercises">Exercises</Link>
                    <Link to="/calendar">Calendar</Link>
                    <Link to="/about">About</Link>
                    <h1>Welcome,&nbsp;{user.name}</h1>
                    <Link to="/goals">My Goals</Link>
                    <Link to="" onClick={handleLogOut}>Log&nbsp;Out</Link>            
                </div>
            </Stack>   
        </Stack>
    )
}