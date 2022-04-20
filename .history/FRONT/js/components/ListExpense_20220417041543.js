import React from "react";

const ListExpense = ({ products }) => {
    return (
        <>
            {/* <button onClick={() => save(time)}> Save time </button> */}
            <ul>
                {products.map((entry, i) => (
                    <li key={i}>{entry.name}</li>
                ))}
            </ul>
        </>
    );
};
export default ListExpense;
