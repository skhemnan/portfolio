import React from 'react'
import './App.css';

/* Component Imports */
import Info from './components/Info'
import ModalButton from './components/Button'

function App() {return (
  <div class="background">
		<ModalButton arrow='down' title='About myself & my experience'/>
		<Info />
		<ModalButton arrow='up' title='Projects and resume'/>
  </div>
  );}

export default App;
