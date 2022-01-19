import errorImage from '../smile.jpg';

import React from 'react'

function Error({message}) {
    return (
        <div>
            <img src={errorImage} width="300" alt="smile" />
            <h1>UPS</h1>
        </div>
    )
}

export default Error
