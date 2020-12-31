import React from 'react'
import './App.css';
import './index.css'

/* Component Imports */
import Info from './components/Info'
import ModalButton from './components/ModalButton'

function App() {

	return (	
  <div class="background">
		<ModalButton position='up' title='About myself & my experience'/>
		<Info />
		<ModalButton position='down' title='Projects and resume'/>
  </div>
  );}

export default App;
