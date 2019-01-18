import React from 'react'
import Input from './input'
import Button from './button'

export default class Form extends React.Component{
    render(){
        return(
            <div>
                <Input name={'name'} id={'name'} pholdr={'Enter a name'}/>
                <br/>
                <Input name={'phone'} id={'phone'} pholdr={'Enter a phone'}/>
                <br/>
                <Button name={'Add'}/>
            </div>
        )
    }
}