import React from 'react';

class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posterUrl: ''
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.posterUrl !== prevProps.posterUrl) {
      this.setState({ posterUrl: this.props.posterUrl });
    }
  }

  render() {
    if (this.state.posterUrl === '') {
      return (
        <img className='poster' src='../img/oscar.jpg'></img>
      )
    } else {
      return (
        <img className='poster' src={this.state.posterUrl}></img>
      )
    }
  }
}

export default Poster;

// var Poster = ({ posterUrl }) => {
//   if (posterUrl === '') {
//     return (
//       <img className='poster' src='../img/oscar.jpg'></img>
//     )
//   } else {
//     return (
//       <img className='poster' src={posterUrl}></img>
//     )
//   }
// };