import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setHistory } from "../store/actions/history"
import { fetchRecipes } from "../utils/api"
import { API_KEY, GET_RECEPIES_URL } from "../constants/constants"
import { useForm } from "react-hook-form"

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  FormErrorIcon,
} from "@chakra-ui/form-control"

import { Button, Input, ButtonGroup } from "@chakra-ui/react"
import PickedRecipes from "../components/PickedRecipes"

const HomeContainer = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    formState,
  } = useForm()
  const dispatch = useDispatch()
  const recipes = useSelector((state) => state.apiReducer.recipes)

  const onSubmit = ({ ingredients }) => {
    dispatch(setHistory(ingredients))
    dispatch(
      fetchRecipes(`${GET_RECEPIES_URL}${ingredients}&apiKey=${API_KEY}`)
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl id="ingredients">
          <FormLabel htmlFor="ingredients">Pick your ingredients</FormLabel>
          <Input type="text" name="ingredients" {...register("ingredients")} />
          <Button
            mt={4}
            colorScheme="teal"
            isLoading={formState.isSubmitting}
            type="submit"
          >
            Submit
          </Button>
        </FormControl>
      </form>
      {recipes.products?.length > 0 ? (
        <PickedRecipes recipes={recipes.products} />
      ) : (
        <div>No recipes</div>
      )}
    </div>
  )
}

export default HomeContainer
