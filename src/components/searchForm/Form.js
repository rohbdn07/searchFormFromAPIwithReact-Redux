import React from "react";

export default function Form() {
    return (
        <>
            <form className="d-block col-lg-5">
                <div className="d-sm-block col-lg-4 card-body">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">
                            Author's name
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            We'll see list of books
                        </div>
                    </div>
                    <div className="mb-3">
                        <label
                            for="exampleInputPassword1"
                            className="form-label"
                        >
                            Book's title
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                        />
                    </div>
                    <button type="button" class="btn btn-outline-primary">
                        Search
                    </button>
                </div>
            </form>
            <hr />
        </>
    );
}
