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
          <div className='picture'>
            <h3>Best Picture</h3>
            <Winner category='picture' displayName={this.state.winners.picture.Nominee} title={this.state.winners.picture.Nominee} review={this.state.winners.review} />
          </div>
          <div className='director'>
            <h3>Best Director</h3>
            <Winner category='director' displayName={this.state.winners.director['Additional Info']} title={this.state.winners.director.Nominee} />
          </div>
          <div className='actress'>
            <h3>Best Actress</h3>
            <Winner category='actress' displayName={this.state.winners.actress.Nominee} title={this.state.winners.actress['Additional Info'].slice(0, this.state.winners.actress['Additional Info'].indexOf('{') - 1)} />
          </div>
          <div className='actor'>
            <h3>Best Actor</h3>
            <Winner category='actor' displayName={this.state.winners.actor.Nominee} title={this.state.winners.actor['Additional Info'].slice(0, this.state.winners.actor['Additional Info'].indexOf('{') - 1)} />
          </div>
        </div>
      );
    }
  }

}

export default WinnersList;