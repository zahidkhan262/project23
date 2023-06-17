import React from 'react'
import HomeCarousel from '../../components/carousel/HomeCarousel'
import C1 from '../../assets/images/c1.jpg'
import C2 from '../../assets/images/c2.jpg'
import C3 from '../../assets/images/c3.jpg'

const Home = () => {

    return (
        <>
            <HomeCarousel
                C1={C1}
                C2={C2}
                C3={C3}
            />
        </>
    )
}

export default Home