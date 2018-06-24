import React from 'react';
import SideGameBox from './SideGameBox';

class Administration extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      welcome: 'Welcome to spot for the Administration!'
    }
  }

  componentDidMount() {

    fetch('/data/get/bets/view')
    .then(res => res.json())
    .then(
      (result) => {
        console.log(result);
        if (result) {
          this.setState({ games: result });
          if (this.state.welcome) this.setState({ welcome: false });
        }
      },
      (error) => {}
    )
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
  
  render() {
    const games = this.state.games || '';
    let listGames = [];
    if (games) {
      for (var gameK in games) {
        listGames.push(
          <SideGameBox
            key={gameK}
            boxTitle={gameK}
            boxData={games[gameK]}
          />
        );
      };
    };
    return (
      <section className='container fix-overflow'>
        <div className='table-grid'>
          {this.state.welcome && 
            <h1 className="info-msg">
              {this.state.welcome}
            </h1>
          }
          <div className='td col_1 list-grid'>
            {games && listGames}
          </div>
          <div className='td col_10'>
          </div>
          <div className='td col_1'>
          </div>
        </div>
      </section>
    );
  }
}

export default Administration;
