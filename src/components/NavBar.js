import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home from '../pages/Home'
import SearchFlights from '../pages/SearchFlights'


const NavBar = () => {
  return (
    <>
    
    <Tabs>
  <TabList>
    <Tab>Home</Tab>
    <Tab>Search Flights</Tab>
    <Tab>Three</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Home/>
    </TabPanel>
    <TabPanel>
     <SearchFlights/>
    </TabPanel>
    <TabPanel>
      <p>three!</p>
    </TabPanel>
  </TabPanels>
</Tabs>

    </>
  )
}

export default NavBar