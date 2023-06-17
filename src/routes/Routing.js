import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from '../components/PageNotFound'
import { ALL_PRODUCTS, DASHBOARD, FAVORITES, NEW_ARRIVAL, ONE_PRODUCTS, ORDERS, PAGE_NOT_FOUND } from '../helpers/RoutesURL'
import Home from '../pages/home'
import Contactus from '../layout/Contactus'
import Product from '../pages/products'
import ProductDetail from '../pages/product-detail'
const Routing = () => {
    return (
        <Routes>
            <Route path={PAGE_NOT_FOUND} element={<PageNotFound />} />
            <Route path={DASHBOARD} element={<Home />} />
            <Route path={ALL_PRODUCTS} element={<Product />} />
            <Route path={`${ONE_PRODUCTS}/:proId`} element={<ProductDetail />} />
            <Route path={ORDERS} element={<Home />} />
            <Route path={FAVORITES} element={<Home />} />
            <Route path={NEW_ARRIVAL} element={<Home />} />
        </Routes>
    )
}

export default Routing