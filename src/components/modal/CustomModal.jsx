import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const CustomModal = ({ isOpen, onClose, children }) => {
    return (
        <>
            {isOpen && (
                <div className="modal-overlays">
                    <div className="moadal-headers d-flex justify-content-between align-items-center p-2 text-white">
                        <h6></h6>
                        <FontAwesomeIcon icon={faTimes} className='close-modals' onClick={() => onClose()} />
                    </div>
                    {children}
                </div>
            )}
        </>
    );
};
export default CustomModal