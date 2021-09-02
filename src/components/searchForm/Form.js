import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getDataAction } from "../../redux/action/getData-action";
import FormProps from "./FormProps";

export default function Form() {
    const dispatch = useDispatch();
    const { pageCount } = useSelector((state) => state.dataReducer);
    console.log("the page count is", pageCount);
    const [inputField, setInputField] = useState({
        search_for: "",
    });

    const [selectField, setSelectField] = useState("Author");

    const inputsHandlerChange = (e) => {
        setInputField({
            search_for: e.target.value,
        });
    };

    const selectedHandlerChange = (e) => {
        setSelectField(e.target.value);
    };

    const booksPerPage = 20;
    useEffect(() => {
        submitHandler();
    }, [pageCount]);

    const queryParams = [
        ["lookfor", `${inputField.search_for}`],
        ["type", `${selectField}`],
        ["field[]", "title"],
        ["field[]", "authors"],
        ["field[]", "cleanIsbn"],
        ["field[]", "year"],
        ["sort", "relevance,id asc"],
        ["page", `${pageCount}`],
        ["limit", `${booksPerPage}`],
        ["prettyPrint", "false"],
        ["lng", "fi"],
    ];

    const queryString = queryParams
        .map(([key, value]) => `${key}=${value}`)
        .join("&");

    const submitHandler = async (e) => {
        try {
            const response = await fetch(
                `https://api.finna.fi/api/v1/search?${queryString}`,
                {
                    headers: { Accept: "application/json" },
                }
            );
            const data = await response.json();
            dispatch(getDataAction(data));
        } catch (error) {
            console.log("there is an error", error);
        }
    };
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
    );
}
