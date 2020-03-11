import React, {Component} from 'react';
import './App.css';
import Table from "./Table";
import Form from "./Form";

class App extends Component {
  state = {
    characters: []
  }

  removeCharacter = index => {
    const {characters} = this.state;
    
    this.setState({
      characters: characters.filter((character, i) =>{
        return i !== index
      })
    })
  }

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    })
  }

  render () {
    return(
      <div className="container">
        <h1>A Simple React Staff Listing App</h1>
        <Table characterData={this.state.characters} removeCharacter={this.removeCharacter} />
        <br/>
        <h2>Add New Staff Form:</h2>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default App;
