import "./CtoA.css"
import RippleButton from "./RippleButton"


const CtoA = () => {
  const buttonStyle = {
    borderRadius: '4px',
    border: 'none',
    margin: '8px',
    padding: '8px 14px',
    backgroundColor: '#EEEFEF',
    color: 'var(--Neutral-400, #5A6475)',
    overflow: 'hidden',
    position: 'relative',
    cursor: 'pointer',
  };
  return (
    <div className="container" style={{marginTop:96,marginBottom:96}}>
        <div className="c-content">
            <h2 className="c-h2">Unlock Limitless Possibilities with Our New Card Solutions</h2>
            <div className="c-buttons">
              
            <RippleButton onClick={e => console.log(e)}>Unlock your Card<span> <i className="fa-solid fa-wallet" style={{color: "#f2f2f2"}}></i></span></RippleButton>
                <button style={buttonStyle}>Customer support <span><i className="fa-solid fa-phone" style={{color: "#9a9b9e"}}></i></span></button>
            </div>
        </div>
    </div>
  )
}

export default CtoA