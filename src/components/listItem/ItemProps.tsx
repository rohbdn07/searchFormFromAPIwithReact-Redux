import React from 'react';
import { IBook } from '../../model/Book';

const ItemProps: React.FC<IBook> = (props): JSX.Element => {
  const { index, title, year, authors, cleanIsbn } = props;
  const primaryAuthors = authors.primary;
  const authorName = Object.keys(primaryAuthors).pop();

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{title}</td>
        <td>{year}</td>
        <td>{authorName}</td>
        <td>{cleanIsbn}</td>
      </tr>
    </>
  );
};

export default ItemProps;
