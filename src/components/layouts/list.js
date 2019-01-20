import React from 'react'
import PropTypes from 'prop-types'
import Span from './span'

export default class List extends React.Component{
    static propTypes = {
        contact: PropTypes.array.isRequired,
    };
    render(){
        return(
            <div>
                <input name={'filter'} id={'filter'} placeholder={'Filter by name or phone number'}/>
                <ul key={'ulkey'}>
                    {
                        this.props.contact.map(
                            (contact, index) =>
                                <li key={'item-'+index}>
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