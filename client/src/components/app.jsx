import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleYearInput = this.handleYearInput.bind(this);
    this.handleSendYearClick = this.handleSendYearClick.bind(this);
    this.state = {
      year: ''
    };
  }

  handleYearInput(e) {
    this.setState({ year: e.target.value });
  }

  handleSendYearClick() {
    // check if this.state.year is a valid year (is in fact a number, and is within the timespan)
    var convertedYear = Number(this.state.year);
    if (Number.isNaN(convertedYear)) {
      console.log('what is going on');
      this.setState({ year: '' });
    } else if (convertedYear < 1927 || convertedYear > 2010) {
      console.log('invalid year');
      this.setState({ year: '' });
    } else {
      console.log('you did good, kid');
      this.setState({ year: '' });
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>Who won an Oscar?</h1>
        <label for='year'>Enter A Year (1927 – 2010):</label>
        <br></br>
        <br></br>
        <input type='text' size='5' maxlength='4' id='year' name='year' placeholder='Year' value={this.state.year} onChange={this.handleYearInput}></input>
        <span>&nbsp;</span>
        <button type='button' onClick={this.handleSendYearClick}>Send</button>
      </div>
    );
  }

}

export default App;