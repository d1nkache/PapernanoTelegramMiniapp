import Header from "./Header"
import PlusButton from "./PlusButton"
import {trainings} from "./data"
import {useState} from "react"
import AddTraining from "./AddTraining"
import React from "react"
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Fragment } from "react"
import TrainingButton from "./TrainingButton"
import { useNavigate } from 'react-router-dom'
import TrainingScreen from "./TrainingScreen";

function TrainingBuilder({title, description}){
    const navigate = useNavigate();
      return(
        <li>
          <TrainingButton title={title} description={description} onClick={() => navigate('/trainingscreen')}/>
        </li>
      )
    }

export default function MainTrainingScreen({trainingsArr, setTrainingsArr}){
    
    const renderHeader = () => {
            if (location.pathname === '/addtraining') {
              return null;
            }else{   
            return <Header trainingsArr={trainingsArr} setTrainingsArr={setTrainingsArr}/>;  
            }
          };
        
    
        return (
            <Fragment>
                {renderHeader()}
            <main>               
                    <section>
                      <ul>
                        {trainingsArr.map((training, index) => (
                          <TrainingBuilder key={index} {...training} />
                        ))}
                      </ul>
                    </section>
            </main>
            </Fragment>
        )
}