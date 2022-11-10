import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion";
import './App.css';
import './index.css'

/* Component Imports */
import Info from './components/Info'

function App() {

  const [darkEnabled, setDarkEnabled] = useState(false)

	return (	
  <AnimatePresence>
    <div className={darkEnabled ? "dark-background" : "background"}>
      <Info darkEnabled={darkEnabled} setDarkEnabled={setDarkEnabled}/>
    </div>
  </AnimatePresence>
  );}

export default App;
