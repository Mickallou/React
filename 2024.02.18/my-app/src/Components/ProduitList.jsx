const ProduitList = () => {
    const produit = [
        { id: 1, nom: "Produit 1", prix: 100 },
        { id: 2, nom: "Produit 2", prix: 200 },
        { id: 3, nom: "Produit 3", prix: 300 },
        { id: 4, nom: "Produit 4", prix: 400 },
        { id: 5, nom: "Produit 5", prix: 500 }
    ];
    return (
        <ul>
            {produit.map((produit) => (
                <li key={produit.id}>{produit.nom} - {produit.prix}</li>
            ))}
        </ul>
    );
}

export default ProduitList;