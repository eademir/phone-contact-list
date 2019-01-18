import React from 'react'

const Button = (props) =>{
    const {cls, name} = props;
    return <button className={cls}>{name}</button>
}

export default Button