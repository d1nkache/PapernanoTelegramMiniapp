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
import MainTrainingScreen from "./MainTrainingScreen";



export default function App(){

    const [trainingsArr, setTrainingsArr] = useState(trainings)

    return (

        <Router>
      <Fragment>
          <Routes>
            <Route
              path="/"
              element={
                <MainTrainingScreen trainingsArr={trainingsArr} setTrainingsArr={setTrainingsArr}/>
              }
            />
            <Route path="/addtraining" element={<AddTraining />} />
            <Route path="/trainingscreen" element={<TrainingScreen />} />
          </Routes>
      </Fragment>
    </Router>
      )
}