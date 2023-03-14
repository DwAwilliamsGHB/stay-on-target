import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import './HeroBanner.css'

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography color="#FF2625" fontWeight="400" fontSize="100px">Stay On Target</Typography>
    <Stack class="ExerciseButton">
      <a href="/exercises" style={{ textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px', marginRight: '200px' }}>
      Stay&nbsp;On&nbsp;Target
    </Typography>
  </Box>
);

export default HeroBanner;
