import { Typography } from '@mui/material';
import { Link } from 'react-router-dom'

import './About.css'

export default function About() {

  return (
    <>
      <div class="welcome">
      <Typography color="#FF2625" fontWeight="500" fontSize="40px">If this is your first time coming here, you're in the right place</Typography>
      <br/>
        <div class="p">
          <Typography  fontWeight="200" fontSize="30px">This page serves as a guide to help you understand how to get started on the site. First you should head over to the <Link to="/goals"style={{ color: 'red', fontWeight: 400}}>My Goals</Link> page to set up 
          some goals you are working towards. Then you can head over to the <Link to="/calendar"style={{ color: 'red', fontWeight: 400}}>Calendar</Link> to start planning out how you will achieve these goals and determine when you will carry out your normal workouts. 
          Then after you have set up your schedule you may check out the <Link to="/exercises"style={{ color: 'red', fontWeight: 400}}>Exercises</Link> page and begin building a catalog of the many exerices you can perform. In the detail page for each exercise
          you will find an additional wealth of information to help lead you to useful guides on youtube as well as similar exercises. That's about all there is to it, keep your motivaton high and always 
          try to <Link to="/"style={{ color: 'red', fontWeight: 400}}>Stay on Target!</Link></Typography>
        </div>
      </div>


    </>
  );
}