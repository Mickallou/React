import React, { useReducer } from "react";
import ProductNew from "./ProductNew";
import ProductEdit from "./ProductEdit";
import { PRODUCT } from "../../../Models/Product";

const ProduitList = () => {

    const UI_STATE = {
        NONE: 'NONE',
        CREATE: 'CREATE',
        EDIT: 'EDIT'
    };

    const ACTION_TYPES = {
        PRODUCT_CREATE: 'PRODUCT_CREATE',
        PRODUCT_CREATED: 'PRODUCT_CREATED',
        PRODUCT_EDIT: 'PRODUCT_EDIT',
        PRODUCT_UPDATED: 'PRODUCT_UPDATED'
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case ACTION_TYPES.PRODUCT_CREATE:
                return { ...state, uiState: UI_STATE.CREATE };
            case ACTION_TYPES.PRODUCT_CREATED:
                return {
                    ...state,
                    products: [...state.products, action.payload],
                    uiState: UI_STATE.NONE
                };
            case ACTION_TYPES.PRODUCT_EDIT:
                return {
                    ...state,
                    selectedProduct: action.payload,
                    uiState: UI_STATE.EDIT
                };
            case ACTION_TYPES.PRODUCT_UPDATED:
                return {
                    ...state,
                    products: state.products.map(p => p.id === action.payload.id ? action.payload : p),
                    uiState: UI_STATE.NONE
                };
            default:
                return state;
        }
    };

    const initialState = {
        products: PRODUCT,
        selectedProduct: null,
        uiState: UI_STATE.NONE
    };

    const [state, dispatch] = useReducer(reducer, initialState);

    if (!state.products) return <div>No Product</div>;

    return (
        <div>
            <h3>Produit List</h3>
            <button onClick={
                () => dispatch({ type: ACTION_TYPES.PRODUCT_CREATE })
            }>New Product</button>
            <div className="theProduitListShow">
                <table className="theTable">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nom</th>
                            <th>Prix</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {state.products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.pName}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => alert(`${product.id} - ${product.pName}`)}>Show</button>
                                    <button onClick={
                                        () => dispatch({ type: ACTION_TYPES.PRODUCT_EDIT, payload: product })
                                    }>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>
                    {state.uiState === UI_STATE.CREATE && <ProductNew setProducts={
                        product => dispatch({ type: ACTION_TYPES.PRODUCT_CREATED, payload: product })
                    } />}
                    {state.uiState === UI_STATE.EDIT && <ProductEdit theProduct={state.selectedProduct} changePro={
                        product => dispatch({ type: ACTION_TYPES.PRODUCT_UPDATED, payload: product })
                    } />}
                </div>
            </div>
        </div>
    );
};

export default ProduitList;
