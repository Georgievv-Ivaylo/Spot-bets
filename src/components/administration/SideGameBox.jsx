import React from 'react';

class SideGameBox extends React.Component {
  
  render() {
    const games = this.props.boxData;
    const title = this.props.boxTitle;
    let listGames = {};
    if (games) {
      listGames = games.map((game, id) => 
        <div key={id} className='href'>
          {game.mainInfo.home +' vs '+ game.mainInfo.away}
        </div>
      );
    };
    return (
      <div className='box'>
        <h4 className='title'>
          {title +' ('+ games.length +')'}
        </h4>
        <div className='content'>
          {games && listGames}
        </div>
      </div>
    );
  }
}

export default SideGameBox;
