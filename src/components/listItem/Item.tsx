import React from 'react';
import ReactPaginate from 'react-paginate';
import ItemProps from './ItemProps';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import './item.css';
import { actionCreators } from '../../redux/index';
import { RootState } from '../../redux/reducers';
import { IBook } from '../../model/Book';

export default function Item(): JSX.Element {
  const { allData, totalItems, errorMessage } = useSelector((state: RootState) => state.dataReducer);
  const dispatch = useDispatch();
  const { getPageAction } = bindActionCreators(actionCreators, dispatch);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [currentPage, setcurrentPage] = React.useState<number>(0);
  const booksPerPage = 20;

  const displayBooks = allData
    ? allData.map((item: IBook, index: number) => {
        return (
          <ItemProps
            key={index}
            index={index + 1}
            title={item.title}
            authors={item.authors}
            year={item.year}
            cleanIsbn={item.cleanIsbn}
          />
        );
      })
    : null;

  const changePage = ({ selected }: any) => {
    setcurrentPage(selected);
    getPageAction(pageNumber + selected);
  };

  const isError: JSX.Element | null = errorMessage ? (
    <div className="container d-flex justify-content-center align-item-center">
      <p>{errorMessage}</p>
    </div>
  ) : null;

  const renderTableList: JSX.Element = (
    <>
      <div className="col-12">
        {!allData ? (
          <div>
            <h5>oppps! didn"t find the match</h5>
          </div>
        ) : (
          <table className="container table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Book's title</th>
                <th scope="col">Year</th>
                <th scope="col">Author(s)</th>
                <th scope="col">Isbn</th>
              </tr>
            </thead>

            {isError}

            <tbody className="tablelist">{displayBooks}</tbody>
          </table>
        )}
      </div>
    </>
  );

  return (
    <>
      <div className="totalItem_header">
        <p>{`The total item(s) listed are: ${totalItems}`}</p>
      </div>

      {renderTableList}

      <div className="container d-flex justify-content-center col-8">
        <ReactPaginate
          pageCount={Math.ceil(totalItems / booksPerPage)}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          previousLabel={'Previous'}
          nextLabel={'Next'}
          onPageChange={changePage}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          activeClassName={'active'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
        />
      </div>
    </>
  );
}
