import { useEffect, useState } from 'react'
import './App.css'
import Inside from './components/inside';
import Outside from './components/outside';

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log("rtjierjei");
  },[isOpen]);

  return (
    <div className='container'>
      <Inside isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outside isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  )
}

export default App
