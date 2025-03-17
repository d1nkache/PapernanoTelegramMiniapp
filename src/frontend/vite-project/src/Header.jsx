import EscButton from "./EscButton"
import PlusButton from "./PlusButton"
import {trainings} from "./data"
import {useState} from "react"
import { useEffect } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';


export default function Header({trainingsArr, setTrainingsArr}){

    const location = useLocation()
    const navigate = useNavigate()
    const hideHeaderOnRoutes = ["/addtraining"]
    const data = location.state

    // if (data !== null){
    //     const trainingName = data.name
    //     const trainingDescription = data.description
    //     const newTraining = { title: trainingName, description: trainingDescription };
    //     useEffect(() => {
    //         setTrainingsArr((prevTraining)  => [...prevTraining, newTraining])}, [])
    // }

    useEffect(() => {
        if (data) {
            const trainingName = data.name;
            const trainingDescription = data.description;
            const newTraining = { title: trainingName, description: trainingDescription };

            setTrainingsArr((prevTraining) => [...prevTraining, newTraining]);
        }
    }, [data, setTrainingsArr]);



    if(hideHeaderOnRoutes.includes(location.pathname)){
        return null
    }

    const goToAboutPage = () => {
        navigate('/addtraining');
      };

    

    // function handleClick(trname, desc){
    //     const newTraining = { title: trname, description: desc };
    //     setTrainingsArr((prevTraining)  => [...prevTraining, newTraining]);
    //   }

    return(
        <header>
            <EscButton></EscButton>
          <h2>Тренировки</h2>
          <span>
            <PlusButton onClick={goToAboutPage}>+</PlusButton>
          </span>
        </header>
    )
}