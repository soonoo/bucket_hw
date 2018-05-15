import React from 'react';

const BookmarkToast = ({ upper, deleted, hidden, message, index, onMouseOver, onMouseLeave }) => {
    const className = upper ? 'bookmark-toast upper' : 'bookmark-toast lower';
    if(hidden) return null;

    return (
        <div onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className={className}>
            북마크가 {message[index] ? '삭제' : '추가'}되었습니다.
        </div>
    );
};

export default BookmarkToast;
