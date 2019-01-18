import React from 'react'

const Input = (props) => {
    const {name, id, pholdr} = props;
    return <input name={name} id={id} placeholder={pholdr}/>

}

export default Input