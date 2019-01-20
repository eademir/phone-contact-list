import React, { Component } from 'react';
import './App.css';
import {Contact} from './components/layouts/index'

class App extends Component {
    constructor(props){
        super(props);
        this.addContact = this.addContact.bind(this);
        this.state = {
            contact: [{
                name: 'Eray',
                phone: '1234567890'
            },{
                name: 'Emre',
                phone: '0987654321'
            },{
                name: 'Talut',
                phone: '08287311290'
            },{
                name: 'Bahar',
                phone: '9715231989'
            },{
                name: 'Furkan',
                phone: '86187387109'
            }]
        };
    }
    addContact (contac){
        const {contact} = this.state;
        contact.push(contac);
        this.setState({
            contact: contact
        })
    }
  render() {
    return (
      <div className="App">
        <Contact
            contact={this.state.contact}
            addContact={this.addContact}
        />
      </div>
    );
  }
}

export default App;
