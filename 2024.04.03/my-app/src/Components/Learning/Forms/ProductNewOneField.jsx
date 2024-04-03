import React, { useState } from 'react'

const ProductNewOneField = () => {
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [amount, setAmount] = useState('')

    const handleChange = (set) => (e) => set(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(`The name of the product is : ` + name)
        console.log(`The price of the product is : ` + price)
        console.log(`The amount of the product is : ` + amount)
    }

    return (
        <div className='ProductNew'>
            <form onSubmit={handleSubmit}>
                <table>
                    <tbody>
                        <tr><td colSpan={2}><h1>With One Field</h1></td></tr>
                        <tr>
                            <td><label htmlFor="product_name">Produit Name</label></td>
                            <td><input
                                type="text"
                                id='product_name'
                                name='product_name'
                                // onChange={(e) => setName(e.target.value)}
                                onChange={handleChange(setName)}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="product_price">Produit Price</label></td>
                            <td><input
                                type="text"
                                id='product_price'
                                name='product_price'
                                // onChange={(e) => setName(e.target.value)}
                                onChange={handleChange(setPrice)}
                            /></td>
                        </tr>
                        <tr>
                            <td><label htmlFor="product_amount">Produit Amount</label></td>
                            <td><input
                                type="text"
                                id='product_amount'
                                name='product_amount'
                                // onChange={(e) => setName(e.target.value)}
                                onChange={handleChange(setAmount)}
                            /></td>
                        </tr>
                        <tr >
                            <td colSpan={2} style={{ textAlign: 'center' }}><button>Submit</button></td>
                        </tr>
                    </tbody>
                </table>

            </form>
        </div>
    )
}

export default ProductNewOneField
