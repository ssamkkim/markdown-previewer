import React from 'react'; 
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <textarea id="editor" onChange={this.handleChange} />
        <p id="preview">{this.state.input}</p>
      </div>
    );
  }
}

export default App;
