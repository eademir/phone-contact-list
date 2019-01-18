import React from 'react'

const Span = (props) => {
    const {cls, name} = props;
    return <span className={cls}>{name}</span>
}
export default Span