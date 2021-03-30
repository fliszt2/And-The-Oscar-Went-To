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
          <h3>Best Picture</h3>
          <Winner info={this.state.winners.picture} title={this.state.winners.picture.Nominee}/>
          <h3>Best Director</h3>
          <Winner info={this.state.winners.director} title={this.state.winners.director.Nominee}/>
          <h3>Best Actress</h3>
          <Winner info={this.state.winners.actress} title={this.state.winners.actress['Additional Info'].slice(0, this.props.info['Additional Info'].indexOf('{') - 1)}/>
          <h3>Best Actor</h3>
          <Winner info={this.state.winners.actor} title={this.state.winners.actor['Additional Info'].slice(0, this.props.info['Additional Info'].indexOf('{') - 1)}/>
        </div>
      );
    }
  }

}

export default WinnersList;