import React from 'react'
import { settings } from '../../utils/react-slick-settings/SlickSetting';
import './testimonial.css'
import Slider from 'react-slick';

const CategorySlider = ({ data, C2, handleSelectCategoryData }) => {

    return (
        <Slider  {...settings} >
            {
                data && data?.map((ele) => {
                    return (
                        <React.Fragment key={ele.categoryId}>
                            <div className="testimonials">
                                <div className="testimonial-card d-flex align-items-center" onClick={() => handleSelectCategoryData(ele?.categoryId)}>
                                    <img src={ele?.categoryImageURL || C2} alt="profile" />
                                    <div className="testimonial-content">
                                        <p className='name'>{ele?.categoryName}</p>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })
            }
        </Slider>
    )
}

export default CategorySlider