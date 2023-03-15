import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './HeroBanner.css'

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }}  >
    <div class="exercise">
      <Typography color="#FF2625" fontWeight="400" fontSize="100px">Your Journey Begins Here</Typography>
      <Stack class="exercise-button">
        <a href="/exercises" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
      </Stack>
    </div>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.3', display: { lg: 'block', xs: 'none' }, fontSize: '200px', marginRight: '200px' }}>
      Stay&nbsp;On&nbsp;Target
    </Typography>
      <div class="about">
        <Typography color="#FF2625" fontWeight="200" fontSize="80px">First Time?</Typography>
        <Typography color="#FF2625" fontWeight="200" fontSize="40px">Check out the about page to get your bearings</Typography>
        <Stack class="about-button">
          <a href="/about" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>About</a>
        </Stack>
      </div>
  </Box>
);

export default HeroBanner;
