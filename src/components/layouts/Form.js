import React from 'react'
import Button from './button'

export default class Form extends React.Component{
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            phone: ''
        };
    }
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
                <input
                    name={'name'}
                    id={'name'}
                    value={this.state.name}
                    onChange={this.onChange}
                    placeholder={'Enter a name'}
                    key={'name-key'}
                />
                <br/>
                <input
                    name={'phone'}
                    id={'phone'}
                    value={this.state.phone}
                    onChange={this.onChange}
                    placeholder={'Enter a phone'}
                    key={"phone-key"}
                />
                <br/>
                <Button name={'Add'}/>
            </form>
        )
    }
}