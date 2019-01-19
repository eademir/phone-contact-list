import React from 'react'
import Input from './input'
import PropTypes from 'prop-types'
import Button from './button'

export default class Form extends React.Component{
    constructor(){
        super();
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    static propTypes = {
        contact: PropTypes.array.isRequired,
    };
    state = {
        name: '',
        phone: ''
    };
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        this.props.addContact({
           ...this.state
        });
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <Input
                    name={'name'}
                    id={'name'}
                    value={this.state.name}
                    onChange={this.onChange}
                    pholdr={'Enter a name'}
                    key={this.state.name}
                />
                <br/>
                <Input
                    name={'phone'}
                    id={'phone'}
                    value={this.state.phone}
                    onChange={this.onChange}
                    pholdr={'Enter a phone'}
                    key={this.state.phone}
                />
                <br/>
                <Button name={'Add'}/>
            </form>
        )
    }
}