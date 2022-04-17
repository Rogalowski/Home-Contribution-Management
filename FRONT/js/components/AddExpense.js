import React from "react";

export const FormExpense = () => {
    return (
        <>
            <form onSubmit={onSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="nazwa"
                    onChange={handleChange}
                    value={name}
                />
                <input
                    type="number"
                    name="price"
                    placeholder="cena"
                    onChange={handleChange}
                    value={price}
                />
                <button type="submit">Dodaj wydatek</button>
            </form>
        </>
    );
};
