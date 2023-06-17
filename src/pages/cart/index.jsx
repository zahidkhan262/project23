import React, { useState } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { handleCartToggle, handleRemoveFromCart } from '../../redux/productSlice/ProductSlice';
import C1 from '../../assets/images/c1.jpg'

const Cart = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const dispatch = useDispatch();
    const { cartToggle, cartData } = useSelector(state => state?.product)
    const handleTab = (tab) => {
        setActiveTab(tab)
    }

    return (
        <>
            <div className={`right-cart ${cartToggle ? 'right-cart-active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="toogle-icon" onClick={() => dispatch(handleCartToggle())}><FontAwesomeIcon icon={cartToggle ? faChevronUp : faChevronDown} /></div>
                <div className="cart-header">
                    <div className={`tab ${activeTab === 'tab1' ? 'active-tab' : ''} product-tab`} onClick={() => handleTab('tab1')}>Product</div>
                    <div className={`tab ${activeTab === 'tab2' ? 'active-tab' : ''} price-tab`} onClick={() => handleTab('tab2')}>Price</div>
                    <div className={`tab ${activeTab === 'tab3' ? 'active-tab' : ''}  order-tab`} onClick={() => handleTab('tab3')}>Order</div>
                </div>

                <div className="cart-body">
                    {
                        activeTab === "tab1" ?
                            <div className="product-data">
                                {!cartData.length ? <h4 className='text-center py-2'>Cart is empty</h4> : null}

                                {
                                    cartData && cartData?.map((cartItem) => {
                                        return (
                                            <>
                                                <React.Fragment key={cartItem.id || ''}>
                                                    <div className='d-flex justify-content-around align-items-center cart-item'>
                                                        <div className="cart-detail d-flex align-items-center">
                                                            <div className="cart-img">
                                                                <img src={cartItem.img[0] || C1} alt="img" />
                                                            </div>
                                                            <div className="detail-left">
                                                                <p className="desc-1">{cartItem.title || ''}</p>
                                                                <p className="desc">{cartItem.color || ''}</p>
                                                            </div>
                                                        </div>
                                                        <p>{cartItem.quantity || 0}</p>
                                                        <p className="title">₹ {cartItem.price || ''}</p>
                                                        <FontAwesomeIcon icon={faTimes} onClick={() => dispatch(handleRemoveFromCart(cartItem?.id))} className='text-danger fs-6' />
                                                    </div>
                                                </React.Fragment>
                                            </>
                                        )
                                    })
                                }
                            </div>
                            :
                            activeTab === "tab2" ?

                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Items</h6>
                                    <h6>₹ : 17000</h6>
                                </div>
                                :
                                <div className="d-flex justify-content-between align-items-center">
                                    <h6>Orders</h6>
                                    <h6>₹ : 22000</h6>
                                </div>
                    }
                </div>
            </div>
        </>
    )
}

export default Cart