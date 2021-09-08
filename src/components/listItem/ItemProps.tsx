import React from 'react'
import { IBook } from '../../model/Book'

export default function ItemProps(props: IBook): JSX.Element {
  const { index, title, year, cleanIsbn } = props

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{title}</td>
        <td>{year}</td>
        <td>{cleanIsbn}</td>
      </tr>
    </>
  )
}
