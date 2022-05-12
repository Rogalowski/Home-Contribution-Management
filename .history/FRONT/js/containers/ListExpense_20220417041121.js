// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
import { connect } from "react-redux";
import ListExpense from "../components/ListExpense";
import { addProduct, removeProduct } from "../redux/actions";
import { getBasket, getSum, useFilter } from "../redux/selectors";

const mapState = (state, ownProps) => {
    const customState = useFilter(
        getBasket(state),
        ownProps.match.params.filter
    );
    return {
        products: customState,
        sum: getSum(customState),
    };
};

const mapDispatch = (dispatch) => ({
    addProduct: (product) => {
        dispatch(addProduct(product));
    },
    removeProduct: (product) => {
        dispatch(removeProduct(product));
    },
});

// products, sum, addProduct, removeProduct

export default connect(mapState, mapDispatch)(Cart);
