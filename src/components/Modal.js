import React from 'react';
import '../css/modal.css';

const Modal = ({ modalIndex, items, handleClick }) => {
    let className;
    let src;
    if (modalIndex === -1) {
        className = 'modal';
        src = '';
    } else {
        className = 'modal modal-on';
        src = items[modalIndex].image_url;
    }

    const onImageClick = (e) => {
        e.stopPropagation();
    }

    return (
        <div className={className} onClick={handleClick}>
            <div onClick={onImageClick}>
                <img src={src} />
            </div>
        </div>
    );
};

export default Modal;
