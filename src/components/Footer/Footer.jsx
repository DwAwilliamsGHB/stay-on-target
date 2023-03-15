import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../../assets/Logo/logo.png'
import './Footer.css'

const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4" class="footer">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '45px', height: '45px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="41px" textAlign="center" pb="40px"></Typography>
  </Box>
);

export default Footer;