import { useNavigate } from 'react-router-dom'

function ExercizeBuilder(){
    return(
        <li>
            <p>12345</p>
        </li>
    )

}

export default function AddTraining (){

    const navigate = useNavigate();


    const goBack = () => {
        navigate('/')
    };
    
    return(
        <main>
            <h1>1234</h1>
            <button onClick={goBack}></button>

        </main>

    )
}