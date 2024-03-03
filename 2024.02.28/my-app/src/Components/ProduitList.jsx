import { PRODUCT } from "../Models/Product";
const ProduitList = () => {
    const theProduit = PRODUCT;

    return (
        <div>
            <h3>Produit List</h3>
            <table className="theTable">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Prix</th>
                    </tr>
                </thead>
                <tbody>
                    {theProduit.map(theProduit => (
                        <tr key={theProduit.id}>
                            <td>{theProduit.id}</td>
                            <td>{theProduit.name}</td>
                            <td>{theProduit.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProduitList;