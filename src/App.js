import React from 'react'; 
import './App.scss';
import { marked } from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n[links](https://www.google.com)\n\n```<div></div>```\n1. List Item 1\n1. List Item 2\n1. List Item 3\n> Block Quote\n\n**Bold Text**\n![Google Logo](https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png)'
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  render() {
    return (
      <div>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.input)}}></div>
      </div>
    );
  }
}

export default App;
