import React from 'react';
import axios from 'axios';
import InfoModal from './InfoModal.jsx';
import Poster from './Poster.jsx';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchPoster = this.fetchPoster.bind(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.state = {
      category: this.props.category,
      displayName: this.props.displayName,
      title: this.props.title,
      review: this.props.review,
      posterUrl: '',
      showModal: false,
      year: this.props.year
    };
  }

  componentDidMount() {
    this.fetchPoster();
  }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.fetchPoster();
      this.setState({
        category: this.props.category,
        displayName: this.props.displayName,
        title: this.props.title,
        review: this.props.review,
        year: this.props.year,
        posterUrl: ''
      });
    }
    // if (this.props.category === 'picture') {
    //   this.fetchPoster();
    // }
  }

  showModal() {
    this.setState({ showModal: true });
  }

  hideModal() {
    this.setState({ showModal: false });
  }

  fetchPoster() {
    axios.get(`/poster/${this.props.title}+${this.props.year}`)
    .then((data) => {
      // console.log('data:', data);
      this.setState({ posterUrl: data.data });
    })
    .catch((err) => console.log('err from server:', err));
  }

  render() {
    if (this.state.category === 'picture' && this.state.review) {
      return (
        <>
          <div className='pic winner-header'>
            <h3 className='winner-text-header'>Picture</h3>
          </div>
          <div className='pic winner-name'>
            <h4 className='winner-text'>{this.state.displayName}</h4>
          </div>
          <div className='pic winner-more'>
             <h5 className='more winner-text' onClick={this.showModal}>More</h5>
             <InfoModal handleClose={this.hideModal} showModal={this.state.showModal} review={this.state.review}/>
         </div>
         <div className='pic winner-poster'>
           <Poster posterUrl={this.state.posterUrl}/>
         </div>
        </>
      );
    } else if (this.state.category === 'picture') {
      return (
        <>
          <div className='pic winner-header'>
            <h3 className='winner-text-header'>Picture</h3>
          </div>
          <div className='pic winner-name'>
            <h4 className='winner-text'>{this.state.displayName}</h4>
          </div>
          <div className='pic winner-more'></div>
          <div className='pic winner-poster'>
            <Poster posterUrl={this.state.posterUrl}/>
          </div>
        </>
      );
    } else if (this.state.category === 'director') {
      return (
        <>
          <div className='dir winner-header'>
            <h3 className='winner-text-header'>Director</h3>
          </div>
          <div className='dir winner-name'>
            <h4 className='winner-text'>{this.state.displayName}</h4>
          </div>
          <div className='dir winner-more'>
            <h5 className='winner-text'>{this.state.title}</h5>
          </div>
          <div className='dir winner-poster'>
            <Poster posterUrl={this.state.posterUrl}/>
          </div>
        </>
      );
    } else if (this.state.category.includes('actor')) {
      return (
        <>
          <div className='actress winner-header'>
            <h3 className='winner-text-header'>Actress</h3>
          </div>
          <div className='actress winner-name'>
            <h4 className='winner-text'>{this.state.displayName}</h4>
          </div>
          <div className='actress winner-more'>
            <h5 className='winner-text'>{this.state.title}</h5>
          </div>
          <div className='actress winner-poster'>
            <Poster posterUrl={this.state.posterUrl}/>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className='actor winner-header'>
            <h3 className='winner-text-header'>Actor</h3>
          </div>
          <div className='actor winner-name'>
            <h4 className='winner-text'>{this.state.displayName}</h4>
          </div>
          <div className='actor winner-more'>
            <h5 className='winner-text'>{this.state.title}</h5>
          </div>
          <div className='actor winner-poster'>
            <Poster posterUrl={this.state.posterUrl}/>
          </div>
        </>
      );
    }
  }
}

export default Winner;

{/* <a href={this.state.review.link.url} target='blank'></a> */}

// if (this.state.category === 'picture' && this.state.review) {
//   return (
//     <div className='winner'>
//       <h4 className='winner-name'>{this.state.displayName}</h4>
//       <br></br>
//       <h5 className='more' onClick={this.showModal}>More</h5>
//       <InfoModal handleClose={this.hideModal} showModal={this.state.showModal} review={this.state.review}/>
//     </div>
//   );
// } else if (this.state.category === 'picture') {
//   return (
//     <div className='winner'>
//       <h4 className='winner'>{this.state.displayName}</h4>
//     </div>
//   );
// } else {
//   return (
//     <div className='winner'>
//       <h4>{this.state.displayName}</h4>
//       <br></br>
//       <h5>{this.state.title}</h5>
//     </div>
//   );
// }
// }