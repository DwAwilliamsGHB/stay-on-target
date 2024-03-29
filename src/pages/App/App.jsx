import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import { Box } from '@mui/material'
import './App.css';

import AuthPage from '../AuthPage/AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home/Home';
import ExercisePage from '../ExercisePage/ExercisePage';
import ExerciseDetail from '../ExerciseDetail/ExerciseDetail';
import CalendarPage from '../Calendar/Calendar';
import About from '../About/About';
import UserPage from '../../pages/UserPage/UserPage'
import Footer from '../../components/Footer/Footer';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">
      {
        user ?
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercises" element={<ExercisePage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/goals" element={<UserPage />} />
            <Route path="/exercise/:id" element={< ExerciseDetail />}/>
          </Routes>
          <Footer/>
        </Box>
        :
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}


