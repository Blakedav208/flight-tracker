import React from 'react'
import { Box } from "@chakra-ui/react"
import "./App.css";

const App = () => {
  return (
  <>
   

   <div>
    <h1>We start now</h1>
    <Box m={2}>Tomato</Box>

    <Box maxW="960px" mx="auto" />

    <Box m={[2, 3]} />

    <Box color='gray.50' />


    <Box color='#00000' />


    <Box bg='tomato' />


    <Box backgroundColor='tomato' />
   </div>
    </>
  )

}
export default App;
