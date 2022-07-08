import React from 'react'; 
import './App.scss';
import { marked } from "marked";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '# Welcome to my React Markdown Previewer!\n## This is a sub-heading\n[Google Link](https://www.google.com)\n\nInline Code, `<div></div>`\n```\n// multi line code block\n\nfunction isEven(num) {\n\tif (even % 2 === 0) {\n\t\treturn true;\n\t} else {\n\t\treturn false;\n\t}\n}\n```\n1. List Item 1\n1. List Item 2\n1. List Item 3\n> Block Quote\n\n**Bold Text**\n![Google Logo](https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png)'
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
      <div className="container">
        <textarea id="editor" value={this.state.input} onChange={this.handleChange} />
        <div id="preview" dangerouslySetInnerHTML={{__html: marked.parse(this.state.input)}}></div>
      </div>
    );
  }
}

marked.setOptions({
  breaks: true,
});

export default App;
