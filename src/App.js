import React from 'react'
import { Box } from "@chakra-ui/react"
import "./App.css";

import NavBar from "./components/NavBar"
import SignIn from './pages/SignIn';

const App = () => {
  return (
  <>
   
    <SignIn/>
   <NavBar/>
    </>
  )

}
export default App;
