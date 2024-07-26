import React from 'react';
import { Stack, Typography } from '@mui/material';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { border: '4px solid #FF2625', background: '#fcd3d3', borderRadius: '.5vmin', width: '290px', height: '100px', cursor: 'pointer', gap: '5px' } : { background: '#fff', padding:"10px 0px", borderRadius: '.5vmin', width: '290px', height: '100px', cursor: 'pointer', gap: '6px' }}
    onClick={() => {
      setBodyPart(item);

    }}
  >
    <Typography fontSize="44px" fontWeight="bold"  textTransform="capitalize"> {item}</Typography>
  </Stack>
);

export default BodyPart;