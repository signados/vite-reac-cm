import logoCM from '/logoCM.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom';
import Democomponent from './components/Democomponent';
import Invitations from './components/Invitations';

function App() {
  //const location = useLocation(); import { Link, Route, Routes, useLocation } from 'react-router-dom';
  const envVar = import.meta.env.VITE_ENV_VAR;

  return (
    <>
      <a href="https://cristinamaser.com" target="_blank">
        <img src={logoCM} className="logo" alt="Logo CM" />
      </a>
      <h1>Vite + React + Test + Docker + Tailwind</h1>
      <div>
        <h2>Variable de entorno</h2>
        <p>
          {envVar}
        </p>
      </div>
      <Link to="/democomponent">Componente demo</Link>
      <br/>
      <Link to="/invitations">Invitaciones</Link>
      <Routes>
          <Route path="/democomponent" element={<Democomponent/>} />
          <Route path="/invitations" element={<Invitations/>} />
      </Routes>
    </>
  )
}

export default App
