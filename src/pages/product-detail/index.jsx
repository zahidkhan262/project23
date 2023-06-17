import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { fetchProductData, handleAddToCart } from '../../redux/productSlice/ProductSlice';
import PageLoader from '../../components/loader/PageLoader';
import ProductCardDetail from '../../components/product-detail-card/ProductCardDetail';
import C2 from '../../assets/images/c2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faSearch } from '@fortawesome/free-solid-svg-icons';
import { ALL_PRODUCTS } from '../../helpers/RoutesURL';
import CustomModal from '../../components/modal/CustomModal';
import C1 from '../../assets/images/c1.jpg'
import OutsideClickHandler from 'react-outside-click-handler';
const ProductDetail = () => {
    const { proId } = useParams();
    const [loading, setLoading] = useState(true)
    const [selectedProduct, setSelectedProduct] = useState([]);
    const [selectedProductVariants, setSelectedProductVariants] = useState([]);
    const defaultPacking = selectedProductVariants[0]?.packingDescription;
    const defaultColor = selectedProductVariants[0]?.colorDescription;
    const [selectedPacking, setSelectedPacking] = useState(defaultPacking);
    const [selectedColor, setSelectedColor] = useState(defaultColor);

    const [price, setPrice] = useState('');
    const [selectedItem, setSelectedItem] = useState([]);


    const { productData, isLoading, isError } = useSelector((state) => state?.product);
    console.log(productData?.result, "product detail")
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleShowProductData = (proId) => {
        handleOpenModal();
        if (productData && productData?.result) {
            setSelectedProduct(productData && productData?.result?.find((ele) => ele?.productId === proId && ele))
            setSelectedProductVariants(productData && productData?.result?.find((ele) => ele?.productId === proId && ele)?.variants.slice(0, 6)?.map(variant => variant))
        }
    }

    const uniqueColors = [...new Set(selectedProductVariants?.map(item => item.colorDescription))];

    const uniquePackings = [...new Set(selectedProductVariants?.map(item => item.packingDescription))];




    const handleButtonPacking = (packingDescription) => {
        setSelectedPacking(packingDescription);
        setPrice(getPriceBySelection(selectedColor, packingDescription));
        setSelectedItem((prevSelectedItem) => [...prevSelectedItem, { packingDescription }]);
        setSelectedItem((prevSelectedItem) => [...prevSelectedItem, { price }]);

    };
    const handleButtonColor = (colorDescription) => {
        setSelectedColor(colorDescription);
        setPrice(getPriceBySelection(colorDescription, selectedPacking));
        setSelectedItem((prevSelectedItem) => [...prevSelectedItem, { colorDescription }]);
    };


    const getPriceBySelection = (color, packing) => {
        const selectedData = selectedProductVariants?.find(
            (item) =>
                item.colorDescription === color || item.packingDescription === packing
        );

        return selectedData ? selectedData.grossPrice : '';
    };




    // addtoCart

    const addToCart = (data, img, title, id) => {
        console.log(data, "selectedItem")
        const color = data.find(item => item.colorDescription)?.colorDescription;
        const price = data.find(item => item.price)?.price;
        const packing = data.find(item => item.packingDescription)?.packingDescription;

        const orgData = {
            id,
            color,
            price,
            packing,
            img,
            title
        };
        dispatch(handleAddToCart(orgData))
    }

    const PriceActive = Boolean(price)





    useEffect(() => {
        dispatch(fetchProductData(proId))
        setTimeout(() => {
            setLoading(isLoading)
        }, 2000)
    }, [dispatch]);


    useEffect(() => {
        setPrice(getPriceBySelection(selectedColor, selectedPacking));
    }, [price, selectedColor, selectedPacking, getPriceBySelection]);


    const handleOutsideClick = () => {
        setIsModalOpen(false)
    }

    return (
        <div className='product-detail-section p-3' >
            <Container>
                <div className="product-header py-3 d-flex justify-content-between aling-items-center">
                    <h4><Link to={ALL_PRODUCTS}><FontAwesomeIcon icon={faArrowLeft} className='mx-2 text-dark' /></Link> All Products</h4>
                    <div className={`header-search`} >
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input type="text" name="serch" id="search" placeholder='Search...' />
                    </div>
                </div>
                <Row>
                    {
                        productData && productData?.result?.map((product) => {
                            return (
                                <ProductCardDetail
                                    loading={loading}
                                    key={product?.categoryId}
                                    product={product} C2={C2}
                                    handleShowProductData={handleShowProductData}
                                />
                            )
                        })
                    }
                </Row>
                <div className="product-data-modal" onOutsideClick={handleOutsideClick}>
                    <CustomModal isOpen={isModalOpen} onClose={handleCloseModal} >
                        <div className="modals-body text-dark py-2">
                            <div className="modals-img">
                                {selectedProduct?.productImages && selectedProduct?.productImages.length >= 0 && (
                                    <img src={selectedProduct?.productImages[0] || C1} width='100%' alt={selectedProduct.itemDescription} />
                                )}
                            </div>
                            <div className="modals-content-header py-2 d-flex justify-content-between align-items-center">
                                <h5>{selectedProduct?.itemDescription}</h5>
                                <h5>${price}</h5>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, laudantium!</p>
                            <h6>Please Select Color Description</h6>
                            <div className="modals-color-variants">
                                {uniqueColors?.map((color) => (
                                    <button
                                        className='modals-button-color'
                                        key={color}
                                        onClick={() => handleButtonColor(color)}
                                        style={{
                                            backgroundColor:
                                                color === selectedColor ? '#5e96d3' : 'hsl(0, 1.2658227848101218%, 53.529411764705884%)'
                                        }}
                                    >
                                        {color}
                                    </button>
                                ))}
                            </div>
                            <h6>Please Select Packaging Description</h6>
                            <div className="modals-color-variants">
                                {uniquePackings?.map((packing) => (
                                    <button
                                        className='modals-button-color'
                                        key={packing}
                                        onClick={() => handleButtonPacking(packing)}
                                        style={{
                                            backgroundColor:
                                                packing === selectedPacking ? '#5e96d3' : 'hsl(0, 1.2658227848101218%, 53.529411764705884%)'
                                        }}
                                    >
                                        {packing}
                                    </button>
                                ))}
                            </div>
                            <div className="add-cart text-center pt-4 pb-2">
                                <Button disabled={!PriceActive} className='col-6 text-center' onClick={() => price ? addToCart(selectedItem, selectedProduct?.productImages, selectedProduct?.itemDescription, selectedProduct?.productId) : undefined} >Add to Cart</Button>
                            </div>
                        </div>
                    </CustomModal>
                </div>
            </Container >
        </div >
    )
}

export default ProductDetail