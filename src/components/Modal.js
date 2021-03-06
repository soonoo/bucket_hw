// 이미지 모달 컴포넌트

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
        src = items.find((item) => {
            return modalIndex === item.id;
        }).image_url;
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
