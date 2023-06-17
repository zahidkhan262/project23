import React from 'react'
import { Col } from 'react-bootstrap'
import PageLoader from '../loader/PageLoader'

const ProductCardDetail = ({ product, C2, loading, handleShowProductData }) => {

    console.log(product, "product")
    if (loading) {
        return <PageLoader />
    }

    return (
        <Col md={4} sm={6} xs={12}>
            <div className="product-card" onClick={() => handleShowProductData(product?.productId)}>
                <div className="product-img">
                    <img src={product?.productImages[0] || C2} alt={product?.itemDescription} />
                </div>
                <div className="product-detail py-2">
                    <div className="product-title"><h5>{product?.itemDescription}</h5></div>
                    <div className="product-description"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></div>
                </div>
            </div>
        </Col>
    )
}

export default ProductCardDetail