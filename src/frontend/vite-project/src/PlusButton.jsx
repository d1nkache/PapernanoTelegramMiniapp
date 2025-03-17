export default function Button({children, onClick}){

    return( 
        <button style={buttonStyle} onClick={onClick}>
            <span style={plusStyle}>{children}</span>
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