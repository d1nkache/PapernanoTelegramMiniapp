export default function Addbutton({children, onClick,}){

    return( 
        <button onClick={onClick} style={buttonStyle}>
            <span style={plusStyle}>Добавить</span>
        </button>
    )
}

const buttonStyle = {
    padding: '5px 10px',
    fontSize: '24px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '5px',    
    cursor: 'pointer',
    fontWeight: 'bold',
  };

  
  const plusStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };