import React from "react";

const ListExpense = (timeList) => {
    return (
        <>
            {/* <button onClick={() => save(time)}> Save time </button> */}
            <ul>
                {timeList.map((time, i) => (
                    <li key={i}>{time}</li>
                ))}
            </ul>
        </>
    );
};
export default ListExpense;
