import React from 'react';

export default class GalleryItemBookmarkBadge extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isBookmarked: localStorage.getItem(this.props.id),
        }

        this.toggleBookmark = this.toggleBookmark.bind(this);
    }

    toggleBookmark() {
        const current = localStorage.getItem(this.props.id);
        const value = (this.state.isBookmarked === 'false') ? 'true' : 'false';
        localStorage.setItem(this.props.id, value);
        this.setState({
            isBookmarked: value,
        });
    }

    render() {
        return (
            <span
                onClick={this.toggleBookmark}
                className={this.state.isBookmarked === 'true' ?
                    'bookmark-badge bookmark-on' : 'bookmark-badge bookmark-off'}>
            </span>
        );
    }
}
