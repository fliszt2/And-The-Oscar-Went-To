import React from 'react';
import axios from 'axios';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    // this.fetchPoster = this.fetchPoster.bind(this);
    this.state = {
      category: this.props.category,
      displayName: this.props.displayName,
      title: this.props.title
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
        title: this.props.title
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
    if (this.state.category === 'picture') {
      return (
        <h4>{this.state.displayName}</h4>
      );
    } else {
      return (
        <h4>{this.state.displayName}, {this.state.title}</h4>
      );
    }
  }

}

export default Winner;