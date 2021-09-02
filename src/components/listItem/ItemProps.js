import React from "react";

export default function ItemProps(props) {
    const { index, title, year, Isbn } = props;

    return (
        <>
            <tr>
                <th scope="row">{index}</th>
                <td>{title}</td>
                <td>{year}</td>
                <td>{Isbn}</td>
            </tr>
        </>
    );
}
