import React from 'react';
import axios from 'axios';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchPoster = this.fetchPoster.bind(this);
    this.state = {
      category: this.props.category,
      displayName: this.props.displayName,
      title: this.props.title,
      review: this.props.review
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
          <a href={this.state.review.link.url} target='blank'><h4 className='winner nytimes'>{this.state.displayName}</h4></a>
          <p className='byline'>{this.state.review.headline}</p>
        </div>
      );
    } else if (this.state.category === 'picture') {
      return (
        <h4 className='winner'>{this.state.displayName}</h4>
      );
    } else {
      return (
        <h4 className='winner'>{this.state.displayName}, {this.state.title}</h4>
      );
    }
  }

}

export default Winner;