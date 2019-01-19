import React from 'react'
import PropTypes from 'prop-types'
import Input from './input'
import Span from './span'

export default class List extends React.Component{
    static propTypes = {
        contact: PropTypes.array.isRequired,
    };
    render(){
        return(
            <div>
                <Input name={'filter'} id={'filter'} pholdr={'Filter by name or phone number'}/>
                <ul>
                    {
                        this.props.contact.map(
                            contact =>
                                <li key={contact.phone}>
                                    <Span
                                        name={contact.name}
                                        cls={'name'}
                                    />
                                    <Span
                                        name={contact.phone}
                                        cls={'phone'}
                                    />
                                    <Span cls={'clearfix'}/>
                                </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}