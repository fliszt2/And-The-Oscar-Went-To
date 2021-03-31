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
        <div className='container-placeholder'>
          <img className='placeholder' id='oscar' src='../img/oscar.jpg'></img>
        </div>
      );
    } else {
      return (
        <div className='container-winners'>
          <div className='picture winner'>
            <h3>Picture</h3>
            <br></br>
            <Winner category='picture' displayName={this.state.winners.picture.Nominee} title={this.state.winners.picture.Nominee} review={this.state.winners.review} />
          </div>
          <div className='director winner'>
            <h3>Director</h3>
            <br></br>
            <Winner category='director' displayName={this.state.winners.director['Additional Info']} title={this.state.winners.director.Nominee} />
          </div>
          <div className='actress winner'>
            <h3>Actress</h3>
            <br></br>
            <Winner category='actress winner' displayName={this.state.winners.actress.Nominee} title={this.state.winners.actress['Additional Info'].slice(0, this.state.winners.actress['Additional Info'].indexOf('{') - 1)} />
          </div>
          <div className='actor'>
            <h3>Actor</h3>
            <br></br>
            <Winner category='actor winner' displayName={this.state.winners.actor.Nominee} title={this.state.winners.actor['Additional Info'].slice(0, this.state.winners.actor['Additional Info'].indexOf('{') - 1)} />
          </div>
        </div>
      );
    }
  }

}

export default WinnersList;