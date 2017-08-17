import React, { PropTypes } from 'react'

function Icon(props) {
    const {iconId} = props;
    //const url = 'images/svg/sprite.svg';

    return (
        <svg className={`icon icon-${iconId}`}>
            {/*<use xlinkHref={`${url}#${iconId}`} />*/}
            <use xlinkHref={`#${iconId}`} />
        </svg>
    )
}

export default Icon