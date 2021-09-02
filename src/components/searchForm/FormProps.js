import React from "react";

export default function FormProps(props) {
    const {
        inputField,
        inputsHandlerChange,
        selectedHandlerChange,
        submitHandler,
        selectField,
    } = props;
    return (
        <>
            <form className="d-block" onSubmit={submitHandler}>
                <div className="d-sm-block col-lg-5 col-12 card-body">
                    <div className="mb-3">
                        <label for="exampleInputText" className="form-label">
                            Search for:
                        </label>
                        <input
                            type="text"
                            name="author_name"
                            className="form-control"
                            aria-describedby="emailHelp"
                            value={inputField.search_for}
                            onChange={inputsHandlerChange}
                            placeholder={`Enter name of ${selectField}`}
                        />
                    </div>
                    <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={selectedHandlerChange}
                        value={selectField}
                    >
                        <option value="Author">Author</option>
                        <option value="Title">Title</option>
                    </select>
                    <button
                        type="button"
                        className="btn btn-outline-primary mt-3"
                        onClick={submitHandler}
                    >
                        Search
                    </button>
                </div>
                <div id="emailHelp" className="form-text">
                    We'll see list of books
                </div>
            </form>
            <hr />
        </>
    );
}
