import React from 'react'
import ProductNewOneField from './ProductNewOneField'
import './FormsMain.css'
import ProductNewObj from './ProductNewObj'

const FormsMain = () => {
    return (
        <div>
            <ProductNewOneField />
            <hr style={{ marginTop: '15px' }} />
            <ProductNewObj />
        </div>
    )
}

export default FormsMain
