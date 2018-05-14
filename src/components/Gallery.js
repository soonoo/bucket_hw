// main page image gallery

import React from 'react';

const CONTENTS_URL = "https://s3.ap-northeast-2.amazonaws.com/bucketplace-coding-test/feed/page_";

export default class Gallery extends React.Component {
    constructor() {
        super();
    }

    render() {
        return <div />;
    }

    async componentDidMount() {
        const response = await fetch(`${CONTENTS_URL}1.json`);
        const json = await response.json();
        console.log(json);
        return;
    }
}
