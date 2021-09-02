import React, { useState } from "react";
import ItemProps from "./ItemProps";
import { useSelector, useDispatch } from "react-redux";
import ReactPaginate from "react-paginate";
import "./item.css";
import { getPageAction } from "../../redux/action/getPage-action";

export default function Item() {
    const dispatch = useDispatch();
    const [pageNumber, setPageNumber] = useState(1);
    const [currentPage, setcurrentPage] = useState(0);
    const { allData, totalItems } = useSelector((state) => state.dataReducer);
    const booksPerPage = 20;

    const displayBooks = allData
        ? allData.map((item, index) => {
              return (
                  <ItemProps
                      key={index}
                      index={index + 1}
                      title={item.title}
                      authors={item.authors}
                      year={item.year}
                      Isbn={item.cleanIsbn}
                  />
              );
          })
        : null;

    const changePage = ({ selected }) => {
        setcurrentPage(selected);
        dispatch(getPageAction(pageNumber + selected));
    };

    return (
        <>
            <div>
                <p>{`The total item(s) listed are: ${totalItems} `}</p>
            </div>
            <div className="container">
                {!allData ? (
                    <div>
                        <h5>oppps! didn't find the match</h5>
                    </div>
                ) : (
                    <table className="container table table-striped table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Book's title</th>
                                <th scope="col">Year</th>
                                <th scope="col">Isbn</th>
                            </tr>
                        </thead>

                        <tbody>{displayBooks}</tbody>
                    </table>
                )}
            </div>
            <div className="container d-flex justify-content-center">
                <ReactPaginate
                    pageCount={Math.ceil(totalItems / booksPerPage)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={1}
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    onPageChange={changePage}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    pageLinkClassName={"page-link"}
                    previousClassName={"page-item"}
                    previousLinkClassName={"page-link"}
                    nextClassName={"page-item"}
                    nextLinkClassName={"page-link"}
                    activeClassName={"active"}
                    breakClassName={"page-item"}
                    breakLinkClassName={"page-link"}
                />
            </div>
        </>
    );
}
