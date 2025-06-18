import { GetProducts, GetProduct, AddItemToCart, CheckOutItemsFromCart } from "./GetReducer";
import { combineReducers } from "redux";
import { LoginReducer } from "./LoginReducer";
import { SagaReducer } from "./SagaReducer";
const allreducers = combineReducers({ GetProducts: GetProducts,DataBySaga:SagaReducer, GetProduct: GetProduct, Cart: AddItemToCart, Order: CheckOutItemsFromCart, logindata: LoginReducer });

export default allreducers;
