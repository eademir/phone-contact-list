import React from 'react'
import Input from './input'
import Span from './span'

export default class List extends React.Component{
    render(){
        return(
            <div>
                <Input name={'filter'} id={'filter'} pholdr={'Filter by name or phone number'}/>
                <ul>
                    <li>
                        <Span name={'Eray'} cls={'name'}/>
                        <Span name={'1234567890'} cls={'phone'}/>
                        <Span cls={'clearfix'}/>
                    </li>
                    <li>
                        <Span name={'Emre'} cls={'name'}/>
                        <Span name={'11111111'} cls={'phone'}/>
                        <Span cls={'clearfix'}/>
                    </li>
                    <li>
                        <Span name={'Talut'} cls={'name'}/>
                        <Span name={'237462387'} cls={'phone'}/>
                        <Span cls={'clearfix'}/>
                    </li>
                    <li>
                        <Span name={'Bahar'} cls={'name'}/>
                        <Span name={'124122342'} cls={'phone'}/>
                        <Span cls={'clearfix'}/>
                    </li>
                    <li>
                        <Span name={'Furkan'} cls={'name'}/>
                        <Span name={'1283617'} cls={'phone'}/>
                        <Span cls={'clearfix'}/>
                    </li>
                </ul>
            </div>
        )
    }
}