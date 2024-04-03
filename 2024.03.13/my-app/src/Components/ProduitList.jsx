import React, { useState } from "react";
import { PRODUCT } from "../Models/Product";

const ProduitList = () => {
    const [theProduit] = useState(PRODUCT);


    return (
        <div>
            <h3>Produit List</h3>
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
                    {theProduit.map(theProduit => (
                        <tr key={theProduit.id}>
                            <td>{theProduit.id}</td>
                            <td>{theProduit.pName}</td>
                            <td>{theProduit.price}</td>
                            <td>
                                <button onClick={() => alert(`The id is : ${theProduit.id} and the name is : ${theProduit.pName}`)}>
                                    Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProduitList;