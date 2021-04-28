import React, { useState } from "react"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control"

import { Button, Input, ButtonGroup } from "@chakra-ui/react"

const HomeContainer = () => {
  return (
    <FormControl id="ingredients">
      <FormLabel>Pick your ingredients</FormLabel>
      <Input type="text" />
      <Button mt={4} colorScheme="teal" type="submit">
        Submit
      </Button>
    </FormControl>
  )
}

export default HomeContainer
