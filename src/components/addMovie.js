import React from "react";
import "../styles/addMovie.css"


class addMovie extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label className="movie">
            
                     posterUrl
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            movieName:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
                     Description:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
            
                     Note
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  

  export default addMovie;