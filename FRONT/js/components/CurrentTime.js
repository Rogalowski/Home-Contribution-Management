import React, { useState, useEffect } from "react";

function CurrentTime() {
    const [dateState, setDateState] = useState(new Date());
    useEffect(() => {
        setInterval(() => {
            // console.log("watching");
            setDateState(new Date());
        }, 1000);
    }, []);
    return (
        <div>
            <h2>
                Today is:{" "}
                {dateState.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                })}{" "}
                {dateState.toLocaleString("pl-PL", {
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                })}
            </h2>
        </div>
    );
}

export default CurrentTime;
