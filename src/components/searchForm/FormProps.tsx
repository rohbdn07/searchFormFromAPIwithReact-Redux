import React from 'react';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { actionCreators } from '../../redux';
import './style.css';

interface IFormPropsTypes {
  inputField: any | null;
  inputsHandlerChange: (inputField: React.ChangeEvent<HTMLInputElement>) => void;
  selectedHandlerChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  queryString: string;
  selectField: string;
}

const FormProps: React.FC<IFormPropsTypes> = (props) => {
  const dispatch = useDispatch();
  const { inputField, inputsHandlerChange, selectedHandlerChange, queryString, selectField } = props;
  const { getDataAction } = bindActionCreators(actionCreators, dispatch);

  const onFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    getDataAction(queryString);
  };
  const renderInput: JSX.Element = (
    <input
      type="text"
      name="author_name"
      className="form-control"
      aria-describedby="emailHelp"
      value={inputField.search_for}
      onChange={inputsHandlerChange}
      placeholder={`Enter name of ${selectField}`}
    />
  );
  const renderSelectOption: JSX.Element = (
    <select
      className="form-select"
      aria-label="Default select example"
      onChange={selectedHandlerChange}
      value={selectField}
    >
      <option value="Author">Author</option>
      <option value="Title">Title</option>
    </select>
  );

  return (
    <>
      <form className="d-block card form" onSubmit={onFormSubmit}>
        <div className="d-sm-block col-lg-5 col-12 card-body">
          <div className="mb-3">
            <label htmlFor="exampleInputText" className="form-label">
              Search for:
            </label>
            {renderInput}
          </div>
          {renderSelectOption}
          <button
            type="button"
            className="btn btn-outline-dark mt-3"
            disabled={inputField.search_for.length < 1}
            onClick={onFormSubmit}
          >
            Search
          </button>
        </div>
        <div id="emailHelp" className="form-text">
          Find the book of your choice.
        </div>
      </form>
      <hr />
    </>
  );
};

export default FormProps;
