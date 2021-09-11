import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormProps from './FormProps';
import { RootState } from '../../redux/reducers/index';
import { actionCreators } from '../../redux/index';

type SearchState = {
  search_for: any | null;
};

const Form: React.FC = () => {
  const dispatch = useDispatch();
  const { getDataAction } = bindActionCreators(actionCreators, dispatch);

  const { pageCount } = useSelector((state: RootState) => state.dataReducer);

  const [inputField, setInputField] = React.useState<SearchState>({
    search_for: '',
  });

  const [selectField, setSelectField] = useState<string>('Author');

  const inputsHandlerChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputField({
      search_for: e.currentTarget.value,
    });
  };

  const selectedHandlerChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectField(e.currentTarget.value);
  };

  const booksPerPage = 20;

  useEffect(() => {
    getDataAction(queryString);
  }, [pageCount]);

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
  ];

  const queryString: string = queryParams.map(([key, value]) => `${key}=${value}`).join('&');

  return (
    <>
      <FormProps
        inputField={inputField}
        inputsHandlerChange={inputsHandlerChange}
        selectedHandlerChange={selectedHandlerChange}
        queryString={queryString}
        selectField={selectField}
      />
    </>
  );
};

export default Form;
