import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import image from './congrates.gif'

function App() {
  const cardStyle={
    backgroundColor:'#93FFD8',
    width:'200px',
    padding:'20px',
    borderRadius:'5px',
    boxShadow:'1px 2px 10px gray',
    margin:'20px auto'
  }
  const buttonStyle = {
    margin:'5px',
    padding:'5px',
    color:'white' ,
    backgroundColor:'#548CFF',
    border:'none',
    borderRadius:'5px'
  }

  const showStyle={
    backgroundColor:'#93FFD8',
    width:'200px',
    padding:'20px',
    borderRadius:'5px',
    boxShadow:'1px 2px 10px gray',
    margin:'10px auto',
    display:'block',
    cursor:'pointer',
  }
  const [count,setCount]=useState(0);
  const [ordered, setOrdered] = useState(false)

  return (
    <div className="App" >
      <div style={cardStyle}>
        <div><h3 style={{border: '1px solid #000', borderRadius: '50%',display:'inline-block',padding:'10px'}}>{count}</h3></div>
        {
          count == 0 ? <><button style={buttonStyle} disabled onClick={()=> setCount(count-1)}>Decrease</button>
          <button style={buttonStyle}  onClick={()=> setCount(count+1)}>Increase</button></>
          : <><button style={buttonStyle}  onClick={()=> setCount(count-1)}>Decrease</button>
          <button style={buttonStyle}  onClick={()=> setCount(count+1)}>Increase</button></>
          
        }
        
        <br />
       { count ? <button style={showStyle} onClick={()=> setOrdered(true)}>Order Now</button> : ""}
      </div>
      <br />
      <br />
      {ordered && <div style={showStyle}>
        <h2>Congratulations..!!</h2>
        <h4>Your Order Has Been Successfully added</h4>
        <img style={{width:"180px"}} src={image} alt="" />
      </div>}
                   
      

    </div>
  );
}

export default App;
