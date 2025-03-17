import React from 'react'
import { useNavigate } from 'react-router-dom'
import './index.css'
import Addbutton from "./Addbutton"
import {useState} from "react"

export default function AddTraining (){

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    const navigate = useNavigate();


    const goBack = () => {
        navigate('/')
    };

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleDescriptionChange(event){
        setDescription(event.target.value)
    }

    function onClickAdd(){
        if(name.length > 0 && description.length > 0){
            navigate('/', {
                state: { name: name, description: description }})
        }
    }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', height: '100vh' }}>
        <p style={{ fontSize: '30px', marginBottom: '20px', fontWeight: "bold" }}>Добавить тренировку</p>
      <button
        onClick={goBack}
        style={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          backgroundColor: '#FFFFFF',
          border: "2px solid #000",
          borderRadius: '5px',
          padding: '10px 15px',
          cursor: 'pointer',
          fontSize: "20px",
          fontWeight: "bold"
        }}
      >Х</button>  {/* Кнопка для возвращения на предыдущую страницу */}

        <form>
            <label htmlFor="name" >Введите название тренировки</label>
            <input type="text" id='name' placeholder="Название" className='control' value={name} style={{border: name.trim().length ? null : "123",}} onChange={handleNameChange}/>
        </form>

        <form>
            <label htmlFor="description">Введите описание тренировки</label>
            <input type="text" id='description' placeholder="Группа мышц" className='control' value={description} onChange={handleDescriptionChange}/>
        </form>

        <Addbutton onClick={onClickAdd}></Addbutton>

    </div>
  );
};