import React from 'react';
import Winner from './Winner.jsx';

class WinnersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      winners: {},
      year: 0
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.winners !== prevProps.winners) {
      this.setState({
        winners: this.props.winners,
        year: this.props.year
      });
    }
  }

  render() {
    if (Object.keys(this.state.winners).length === 0) {
      return (
        <div className='container-placeholder'>
          <img className='placeholder' id='oscar' src='../img/oscar.jpg'></img>
        </div>
      );
    } else {
      return (
        <div className='container-winners'>
          <Winner year={this.state.year} category='picture' displayName={this.state.winners.picture.Nominee} title={this.state.winners.picture.Nominee} review={this.state.winners.review} />
          <Winner year={this.state.year} category='director' displayName={this.state.winners.director['Additional Info']} title={this.state.winners.director.Nominee} />
          <Winner year={this.state.year} category='actress' displayName={this.state.winners.actress.Nominee} title={this.state.winners.actress['Additional Info'].slice(0, this.state.winners.actress['Additional Info'].indexOf('{') - 1)} />
          <Winner year={this.state.year} category='actor' displayName={this.state.winners.actor.Nominee} title={this.state.winners.actor['Additional Info'].slice(0, this.state.winners.actor['Additional Info'].indexOf('{') - 1)} />
        </div>
      );
    }
  }

}

export default WinnersList;