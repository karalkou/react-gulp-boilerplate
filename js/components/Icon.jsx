import React, { PropTypes } from 'react'

function Icon(props) {
    const {iconId} = props;
    const url = 'images/svg/sprite.svg';

    return (
        <svg className={`icon icon-${props.iconId}`}>
            {/*<use xlinkHref={`${url}#icon-${props.icon}`} />*/}
            <use xlinkHref={`${url}#${props.iconId}`} />
        </svg>
    )
}

export default Icon