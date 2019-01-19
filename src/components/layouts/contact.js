import React from 'react'
import PropTypes from 'prop-types'
import {List, Form} from './index'

export default class Contact extends React.Component{
    static propTypes = {
        contact: PropTypes.array.isRequired,
    };
    render(){
        return(
            <div>
                <List
                    contact = {this.props.contact}
                />
                <Form
                    addContact = {this.props.addContact}
                />
            </div>
        )
    }
}