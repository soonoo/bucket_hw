import React from 'react';
import BookmarkToast from './BookmarkToast';
import '../css/toast.css';

const BookmarkToastManager = ({ toastQueue, onMouseOver, onMouseLeave }) => {
    const length = toastQueue.length;
    // console.log(toastQueue);
    return (
        <div>
            <BookmarkToast
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
                upper hidden={length === 0}
                message={toastQueue}
                index={0} />
            <BookmarkToast
                onMouseLeave={onMouseLeave}
                onMouseOver={onMouseOver}
                lower hidden={length !== 2}
                message={toastQueue}
                index={1} />
        </div>
    );
};

export default BookmarkToastManager;
