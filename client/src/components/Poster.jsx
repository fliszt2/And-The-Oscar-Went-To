import React from 'react';
import InfoModal from './InfoModal.jsx';
import axios from 'axios';

class Poster extends React.Component {
  constructor(props) {
    super(props);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.fetchInfo = this.fetchInfo.bind(this);
    this.state = {
      posterUrl: '',
      showModal: false,
      info: {}
    }
  }

  componentDidMount() {
    this.fetchInfo(this.props.title);
  }

  componentDidUpdate(prevProps) {
    if (this.props.posterUrl !== prevProps.posterUrl) {
      this.fetchInfo(this.props.title);
      this.setState({ posterUrl: this.props.posterUrl });
    }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  fetchInfo(title) {
    axios.get(`/info/${title}`)
      .then((info) => {
        this.setState({ info: info.data });
      })
      .catch((err) => console.log('err from server:', err));
  }

  render() {
    if (this.state.posterUrl === '') {
      return (
        <img className='poster' src='../img/oscar.jpg'></img>
      )
    }
    return (
      <>
        <img className='poster' src={this.state.posterUrl} onClick={this.showModal}></img>
        <InfoModal handleClose={this.hideModal} showModal={this.state.showModal} info={this.state.info} />
      </>
    )
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