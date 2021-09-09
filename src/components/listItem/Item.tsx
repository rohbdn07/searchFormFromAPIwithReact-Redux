import React from 'react'
import ReactPaginate from 'react-paginate'
import ItemProps from './ItemProps'
import { useSelector, useDispatch } from 'react-redux'
import './item.css'
import { getPageAction } from '../../redux/action/getPage-action'
import { RootState } from '../../redux/reducers'
import { IBook } from '../../model/Book'

export default function Item(): JSX.Element {
  const dispatch = useDispatch()
  const [pageNumber, setPageNumber] = React.useState<number>(1)
  const [currentPage, setcurrentPage] = React.useState<number>(0)
  const { allData, totalItems } = useSelector((state: RootState) => state.dataReducer)
  const booksPerPage = 20

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
        )
      })
    : null

  const changePage = ({ selected }: any) => {
    setcurrentPage(selected)
    dispatch(getPageAction(pageNumber + selected))
  }

  const renderTableList: JSX.Element = (
    <>
      <div className="container">
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
                <th scope="col">Isbn</th>
              </tr>
            </thead>

            <tbody>{displayBooks}</tbody>
          </table>
        )}
      </div>
    </>
  )

  return (
    <>
      <div>
        <p>{`The total item(s) listed are: ${totalItems} `}</p>
      </div>
      {renderTableList}
      <div className="container d-flex justify-content-center">
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
  )
}
