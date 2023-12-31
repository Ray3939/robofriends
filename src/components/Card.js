import React, { Fragment } from 'react';

const Card = (props) => {
    return (
        <Fragment>
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='Robot' src={ `https://robohash.org/${props.id}?200x200`} />
            <div>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
            </div>
        </div>
        </Fragment>
    )
}

export default Card;