import React, { useState } from "react";
import ProductNew from "./ProductNew";
import { PRODUCT } from "../../../Models/Product";
import ProductEdit from "./ProductEdit";

const ProduitList = () => {

    const UI_STATE = {
        NONE: 'NONE',
        CREATE: 'CREATE',
        EDIT: 'EDIT'
    }

    const [products, setProducts] = useState(PRODUCT);
    const [selectedProduct, setSelectedProduct] = useState();
    const [uiState, setUIState] = useState(UI_STATE.NONE);

    const productCreated = (product) => {
        const productsNew = [...products, product];
        setProducts(productsNew);
        setUIState(UI_STATE.NONE);
    };

    if (!products) return <div>No Product</div>;

    return (
        <div>
            <h3>Produit List</h3>
            <button onClick={() => { setUIState(UI_STATE.CREATE) }}>New Product</button>
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
                        {products.map(product => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.pName}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button onClick={() => alert(`${product.id} - ${product.pName}`)}>Show</button>
                                    <button onClick={() => { setSelectedProduct(products); setUIState(UI_STATE.EDIT) }}>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div>

                    {uiState === UI_STATE.CREATE && <ProductNew theProduct={productCreated} />}
                    {uiState === UI_STATE.EDIT && <ProductEdit theProduct={selectedProduct} />}

                </div>
            </div>
        </div>
    );
};

export default ProduitList;
