import React, { useState } from "react";
import { PRODUCT } from "../../../Models/Product";
import ProductNew from "./ProductNew";

const ProduitList = () => {
    const [products, setProducts] = useState(PRODUCT);
    const [showForm, setShowForm] = useState(false);

    if (!products || !products.length) return <div>No Product</div>;

    const handleShowForm = () => {
        setShowForm(true);
    };

    return (
        <div>
            <h3>Produit List</h3>
            <button onClick={handleShowForm}>New Product</button>
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
                                    <button onClick={() => alert(`The id is : ${product.id} and the name is : ${product.pName}`)}>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {showForm && (
                    <div>
                        <ProductNew setProducts={setProducts} setShowForm={setShowForm} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProduitList;
