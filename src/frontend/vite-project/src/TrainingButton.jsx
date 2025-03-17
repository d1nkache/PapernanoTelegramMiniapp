import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function TrainingButton({title, description, onClick}){

    return( 
        <button style={trainingButtonStyle} onClick={onClick}>
            <span style={titleStyle}>{title}</span>
            <span style={descriptionStyle}>{description}</span>
        </button>

    )
}

const trainingButtonStyle = {
    display: "block",
    margin: "0 auto",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "16px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    backgroundColor: "white",
    boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
    transition: "box-shadow 0.3s ease-in-out",
    cursor: "pointer",
    width: "50vw"
  };

  const titleStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold"
  };
  
  const descriptionStyle = {
    color: "#6B7280",
    fontSize: "1.125rem"
  };