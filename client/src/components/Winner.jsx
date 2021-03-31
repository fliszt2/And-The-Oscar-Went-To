import React from 'react';
import axios from 'axios';

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
      showModal: false
    };
  }

  // componentDidMount() {
  //   if (this.state.category === 'picture') {
  //     this.fetchPoster();
  //   }
  // }

  componentDidUpdate(prevProps) {
    if (this.props.title !== prevProps.title) {
      this.setState({
        category: this.props.category,
        displayName: this.props.displayName,
        title: this.props.title,
        review: this.props.review
      });
    }
    // if (this.props.category === 'picture') {
    //   this.fetchPoster();
    // }
  }

  showModal() {
    this.setState({ show: true });
  }

  hideModal() {
    this.setState({ show: false });
  }

  // fetchPoster() {
  //   axios.get(`/review/${this.state.title}`)
  //   .then((data) => {
  //     console.log('data:', data);
  //   })
  //   .catch((err) => console.log('err from server:', err));
  // }

  render() {
    if (this.state.category === 'picture' && this.state.review) {
      return (
        <div>
          <h4 className='winner'>{this.state.displayName}</h4>
          <h5 className='more' onClick={this.showModal}>More</h5>
        </div>
      );
    } else if (this.state.category === 'picture') {
      return (
        <h4 className='winner'>{this.state.displayName}</h4>
      );
    } else {
      return (
        <div>
          <h4 className='winner'>{this.state.displayName}</h4>
          <h5>{this.state.title}</h5>
        </div>
      );
    }
  }

}

export default Winner;

{/* <a href={this.state.review.link.url} target='blank'></a> */}