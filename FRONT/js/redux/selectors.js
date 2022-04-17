// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować

import { createSelector } from "reselect";

export const getBasket = (state) => state.basket;

export const useFilter = (state, filter) =>
    filter ? state.filter((el) => +el.price <= +filter) : state;

export const getSum = (state) =>
    state.reduce((acc, curr) => acc + +curr.price, 0);
