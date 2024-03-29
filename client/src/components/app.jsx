import React from 'react';
import axios from 'axios';
import WinnersList from './WinnersList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleQueryInput = this.handleQueryInput.bind(this);
    this.handleSendYearClick = this.handleSendYearClick.bind(this);
    this.handleTitleClick = this.handleTitleClick.bind(this);
    this.state = {
      query: '',
      year: 0,
      winners: {}
    };
  }

  handleQueryInput(e) {
    this.setState({ query: e.target.value });
  }

  handleSendYearClick() {
    // check if this.state.year is a valid year (is in fact a number, and is within the timespan)
    var convertedQuery = Number(this.state.query);
    if (Number.isNaN(convertedQuery) || convertedQuery < 1927 || convertedQuery > 2010) {
      console.log('invalid year');
      this.setState({ query: '' });
    } else {
      axios.get(`/movies/${convertedQuery}`)
        .then((winners) => {
          console.log('winners.data:', winners.data);
          this.setState({
            query: '',
            year: convertedQuery,
            winners: winners.data
          });
        })
        .catch((err) => console.log('err from server:', err));
    }
  }

  handleTitleClick() {
    this.setState({
      winners: {},
      year: 0
    });
  }

  render() {
    return (
      <div className='app'>
        <div className='container-header'>
          <div className='header'>
            <h1 id='title' onClick={this.handleTitleClick} >And The Oscar Went To...</h1>
            <label for='query'>(1927 – 2010)</label>
            <br></br>
            <br></br>
            <input type='text' size='5' maxlength='4' id='query' name='query' placeholder='&nbsp;Year' value={this.state.query} onChange={this.handleQueryInput}></input>
            <span>&nbsp;</span>
            <button type='button' className='envelope' onClick={this.handleSendYearClick}>&nbsp;Open the Envelope&nbsp;</button>
          </div>
        </div>
        <div className='year-container'>
          <h2 className={this.state.year === 0 ? 'display-none' : 'year'}>{this.state.year}</h2>
        </div>
        <WinnersList winners={this.state.winners} year={this.state.year}/>
      </div>
    );
  }

}

export default App;
