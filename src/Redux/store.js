import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools} from "redux-devtools-extension";
import { userListReducer, userLoginReducer } from './Reducers/userReducers';
import { productCreateReducer, productDeleteReducer, productEditReducer, productListReducer, productUpdateReducer } from "./Reducers/ProductReducers";
import { orderDeliveredReducer, orderDetailsReducer, orderListReducer } from "./Reducers/OrderReducers";
import { categoryCreateReducer, categoryDeleteReducer, categoryEditReducer, categoryListReducer, categoryUpdateReducer } from "./Reducers/CategoryReducers";


const reducer = combineReducers({
    userLogin: userLoginReducer,
    userList: userListReducer,
    productList: productListReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productEdit: productEditReducer,
    productUpdate: productUpdateReducer,
    orderList: orderListReducer,
    orderDetails: orderDetailsReducer,
    orderDeliver: orderDeliveredReducer,
    categoryDelete: categoryDeleteReducer,
    categoryCreate: categoryCreateReducer,
    categoryList: categoryListReducer,
    categoryEdit: categoryEditReducer,
    categoryUpdate: categoryUpdateReducer,
})

// login
const userInfoFromLocalStorage = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")) : null


const initialState = {
    userLogin: {
        userInfo: userInfoFromLocalStorage
    }
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store