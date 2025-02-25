import { useState } from 'react'
import Card from './components/card/Card.jsx';
import Header from './components/Header/Header.jsx';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const name = 'Ritobroto';

  return (
    <>
      <div style={{
        display: 'flex',
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '15px',
        margin: '0 auto',
      }}>
        <Header name={name} />
        
        <Card setCount={setCount} />
        
        <p className="read-the-docs">
          Incremented Count is {count}
        </p>
      </div>
    </>
  )
}

export default App
