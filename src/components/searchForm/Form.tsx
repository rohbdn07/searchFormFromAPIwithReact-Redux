import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getDataAction } from '../../redux/action/getData-action'
import FormProps from './FormProps'
import { RootState } from '../../redux/reducers/index'

type SearchState<T> = {
  search_for: T
}

const Form: React.FC = () => {
  const dispatch = useDispatch()
  const { pageCount } = useSelector((state: RootState) => state.dataReducer)
  console.log('the page count is', pageCount)
  const [inputField, setInputField] = React.useState<SearchState<string | null>>({
    search_for: '',
  })

  const [selectField, setSelectField] = useState<string>('Author')

  const inputsHandlerChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setInputField({
      search_for: e.currentTarget.value,
    })
  }

  const selectedHandlerChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setSelectField(e.currentTarget.value)
  }

  const booksPerPage = 20
  useEffect(() => {
    submitHandler()
  }, [pageCount])

  const queryParams = [
    ['lookfor', `${inputField.search_for}`],
    ['type', `${selectField}`],
    ['field[]', 'title'],
    ['field[]', 'authors'],
    ['field[]', 'cleanIsbn'],
    ['field[]', 'year'],
    ['sort', 'relevance,id asc'],
    ['page', `${pageCount}`],
    ['limit', `${booksPerPage}`],
    ['prettyPrint', 'false'],
    ['lng', 'fi'],
  ]

  const queryString = queryParams.map(([key, value]) => `${key}=${value}`).join('&')

  // HELMET-KIRJASTOJEN AINEISTOLUETTELOT
  // Swagger API documentation:
  // https://api.finna.fi/swagger-ui/?url=%2Fapi%2Fv1%3Fswagger#!
  const submitHandler = async () => {
    try {
      const response = await fetch(`https://api.finna.fi/api/v1/search?${queryString}`, {
        headers: { Accept: 'application/json' },
      })
      const data = await response.json()
      dispatch(getDataAction(data))
    } catch (error) {
      console.log('there is an error', error)
    }
  }
  return (
    <>
      <FormProps
        inputField={inputField}
        inputsHandlerChange={inputsHandlerChange}
        selectedHandlerChange={selectedHandlerChange}
        submitHandler={submitHandler}
        selectField={selectField}
      />
    </>
  )
}

export default Form
