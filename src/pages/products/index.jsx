import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryData, fetchSubCategoryData } from '../../redux/productSlice/ProductSlice'
import CategorySlider from '../../components/slider/CategorySlider'
import C2 from '../../assets/images/c2.jpg'
import { Col, Row } from 'react-bootstrap';
import './index.css'
import { useNavigate } from 'react-router-dom'
import { ONE_PRODUCTS } from '../../helpers/RoutesURL'
import PageLoader from '../../components/loader/PageLoader'
const Product = () => {
    const { categoryData, subCategoryData, isLoading, isError } = useSelector(state => state?.product)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const handleSelectCategoryData = (catId) => {
        dispatch(fetchSubCategoryData(catId))
    }
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchCategoryData())
        setTimeout(() => {
            setLoading(isLoading)
        }, 1000)
    }, [dispatch]);


    if (loading) {
        return <PageLoader />
    }
    return (
        <React.Fragment>
            <CategorySlider
                data={categoryData?.result}
                C2={C2}
                handleSelectCategoryData={handleSelectCategoryData}
            />
            {subCategoryData?.result?.length ?
                <div className="sub-category-section">
                    <Row>
                        {subCategoryData && subCategoryData?.result?.map((sub) => {
                            return (
                                <Col md={3} key={sub?.subCategoryId}>
                                    <div className="sub-card" onClick={() => navigate(`${ONE_PRODUCTS}/${sub?.subCategoryId}`, { replace: true })}>
                                        <img src={sub?.subCategoryImageURL} alt={sub?.subCategoryName} />
                                        <div className="testimonial-content sub-content text-dark">
                                            <h5>{sub?.subCategoryName}</h5>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
                :
                <h2 className='text-center pt-5'>There is no data</h2>
            }

        </React.Fragment>
    )
}

export default Product