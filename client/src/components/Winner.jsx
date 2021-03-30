import React from 'react';
import axios from 'axios';

class Winner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: this.props.info,
      category: this.props.info.Category,
      title: this.props.info.Category.includes('-- Leading Role') ? this.props.info['Additional Info'].slice(0, this.props.info['Additional Info'].indexOf('{') - 1) : this.props.info.Nominee
    };
  }

  componentDidMount() {
    if (this.state.category === 'Best Picture') {
      axios.get(`/review/${this.state.title}`)
        .then((data) => {
          console.log('data:', data);
        })
        .catch((err) => console.log('err from server:', err));
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.info !== prevProps.info) {
      this.setState({
        info: this.props.info,
        title: this.props.info.Category.includes('-- Leading Role') ? this.props.info['Additional Info'].slice(0, this.props.info['Additional Info'].indexOf('{') - 1) : this.props.info.Nominee
      });
    }
  }

  render() {
    var { info } = this.props;
    if (info.Category === 'Best Picture') {
      return (
        <h4>{info.Nominee}</h4>
      );
    } else if (info.Category === 'Directing') {
      return (
        <h4>{info['Additional Info']}, {info.Nominee}</h4>
      );
    } else {
      var filmTitle = info['Additional Info'].slice(0, info['Additional Info'].indexOf('{') - 1);
      return (
        <h4>{info.Nominee}, {filmTitle}</h4>
      );
    }
  }

}

export default Winner;