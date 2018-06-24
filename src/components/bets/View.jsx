import React from 'react';

class Bets extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      welcome: 'Welcome to spot for Bets!'
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  render() {
    return (
      <h1 className="info-msg">
        {this.state.welcome}
      </h1>
    );
  }
}

export default Bets;
