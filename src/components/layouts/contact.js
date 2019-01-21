import React from 'react'
import PropTypes from 'prop-types'
import {List, Form} from './index'

const Contact = props =>{
    return(
        <div>
            <List
                contact = {props.contact}
            />
            <Form
                addContact = {props.addContact}
            />
        </div>
    )
};

Contact.propTypes = {
    contact: PropTypes.array.isRequired,
};

export default Contact