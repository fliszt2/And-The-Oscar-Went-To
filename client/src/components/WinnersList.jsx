import React from 'react';
import Winner from './Winner.jsx';

class WinnersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: {}
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.winners !== prevProps.winners) {
      this.setState({ winners: this.props.winners });
    }
  }

  render() {
    if (Object.keys(this.state.winners).length === 0) {
      return (
        <p>Nothing to see, here.</p>
      );
    } else {
      return (
        <div className='winners-list'>
          <Winner info={this.state.winners.picture}/>
          {/* <h2>Best Picture: {this.state.winners.picture.Nominee}</h2> */}
          <h2>Best Director: {this.state.winners.director['Additional Info']}</h2>
          <h2>Best Actress: {this.state.winners.actress.Nominee}</h2>
          <h2>Best Actor: {this.state.winners.actor.Nominee}</h2>
        </div>
      );
    }
  }

}

export default WinnersList;