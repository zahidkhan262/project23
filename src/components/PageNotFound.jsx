import React from 'react'
import NotFound from '../assets/images/page-not-found.gif'
const PageNotFound = () => {
    return (
        <div className='common'>
            <div className='page-not-found'><img src={NotFound} alt="no Data" className='w-100 h-100' />
                <p className='text-center'>404 Page Not Found </p>
            </div>
        </div>
    )
}

export default PageNotFound