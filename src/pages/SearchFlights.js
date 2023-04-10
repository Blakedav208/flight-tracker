import React from 'react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup, Stack, Button } from '@chakra-ui/react'

const SearchFlights = () => {
  
  return (
    <>

      {/* autofill with all airports in the world */}
      <Select placeholder='Select Departing City'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

      <Select placeholder='Select Destination'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
      </Select>

      {/* create a calendar date picker */}
      <Input placeholder='Enter Departure Date (mm/dd/yy)' />  
      <Input placeholder='Enter Return Date (mm/dd/yy)' />

      <Stack spacing={5} direction='row'>
        <Checkbox >One Way</Checkbox>
        <Checkbox  defaultChecked>
          Round Trip
        </Checkbox>
      </Stack>

      <Button >Search</Button>
    </>
  )
}

export default SearchFlights