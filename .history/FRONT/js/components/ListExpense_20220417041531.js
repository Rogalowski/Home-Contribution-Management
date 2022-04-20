import React from "react";

const ListExpense = ({ products }) => {
    return (
        <>
            {/* <button onClick={() => save(time)}> Save time </button> */}
            <ul>
                {products.map((time, i) => (
                    <li key={i}>{time.name}</li>
                ))}
            </ul>
        </>
    );
};
export default ListExpense;
