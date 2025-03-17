import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function EscButton(){

    return( 
        <IconButton>
            <ArrowBackIcon />
        </IconButton>
    )
}

const containerStyle = {
    display: 'flex',
    justifyContent: 'flex-start',
    padding: '10px',
  };
