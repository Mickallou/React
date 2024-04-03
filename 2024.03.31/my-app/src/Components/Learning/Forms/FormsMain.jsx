import React from 'react'
import './FormsMain.css'
import ProductNewOneField from './ProductNewOneField'
import ProductNewObj from './ProductNewObj'
import ProductNewClassInstance from './ProductNewClassInstance'
import ProductNewValidation from './ProductNewValidation'

const FormsMain = () => {
    return (
        <div>
            <ProductNewOneField />
            <hr style={{ marginTop: '15px' }} />
            <ProductNewObj />
            <hr style={{ marginTop: '15px' }} />
            <ProductNewClassInstance />
            <hr style={{ marginTop: '15px' }} />
            <ProductNewValidation />
        </div>
    )
}

export default FormsMain
