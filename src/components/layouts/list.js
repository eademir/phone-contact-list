import React from 'react'
import PropTypes from 'prop-types'
import Span from './span'

export default class List extends React.Component{
    constructor(props){
        super(props);
        this.onChangeFilterText = this.onChangeFilterText.bind(this);
        this.state = {
            filterText: ''
        };
    }
    static propTypes = {
        contact: PropTypes.array.isRequired,
    };
    onChangeFilterText(e){
        this.setState({
            filterText: e.target.value
        })
    };
    render(){
        const filtredCont = this.props.contact.filter(
            contact => {
                return contact.name.toLowerCase().indexOf(
                    this.state.filterText.toLowerCase()
                ) !== -1
            }
        );
        return(
            <div>
                <input
                    name={'filter'}
                    value={this.state.filterText}
                    onChange={this.onChangeFilterText}
                    id={'filter'}
                    placeholder={'Filter by name'}
                />
                <ul key={'ulkey'}>
                    {
                        filtredCont.map(
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