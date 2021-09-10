import React from 'react';
import { IBook } from '../../model/Book';

const ItemProps: React.FC<IBook> = (props): JSX.Element => {
  const { index, title, year, cleanIsbn } = props;

  return (
    <>
      <tr>
        <th scope="row">{index}</th>
        <td>{title}</td>
        <td>{year}</td>
        <td>{cleanIsbn}</td>
      </tr>
    </>
  );
};

export default ItemProps;
