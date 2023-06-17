import React from 'react'
import { profileUrl } from '../../constant/url'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

const ProfileCard = () => {
    return (
        <>
            <div className="profile-menu d-flex align-items-center">
                <div className="pro-img">
                    <img src={profileUrl} alt="" />
                </div>
                <div className="pro-name">
                    <p>zahidkhan</p>
                    <p>zahidkhan007860@gmail.com</p>
                </div>
                <FontAwesomeIcon icon={faChevronDown} />
            </div>
        </>
    )
}

export default ProfileCard