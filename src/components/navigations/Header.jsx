import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../users/actions';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      link: false
    };
  }

  render() {
    const user = this.props.user || {};
    return (
      <section className="navigation-grid container">
        <Link to='/'
          className={'href'+ (this.state.link === 'home' ? ' active' : '')}
          onClick={ () => this.setActive('home')}
        >Home</Link>
        <Link to='/administration'
          className={'href'+ (this.state.link === 'administration' ? ' active' : '')}
          onClick={ () => this.setActive('administration')}
        >Administration</Link>
        <Link to='/administration/upload-xml'
          className={'href'+ (this.state.link === 'upload-xml' ? ' active' : '')}
          onClick={ () => this.setActive('upload-xml')}
        >XML</Link>
        <Link to='/bets'
          className={'href'+ (this.state.link === 'bets' ? ' active' : '')}
          onClick={ () => this.setActive('bets')}
        >Bets</Link>
        {!user.id && <Link key='logIn' to='/log-in'
          className={'href'+ (this.state.link === 'log-in' ? ' active' : '')}
          onClick={ () => this.setActive('log-in')}
        >Log In</Link>}
        {user.id && <div key='logOut' onClick={this.logOut} className="href">Log Out</div>}
        {user.id && <div key='welcome' className="info-msg">{user.fullName}</div>}
      </section>
    );
  }

  setActive = (linkId) => {
    this.setState({link: ''}, () => {
      this.setState({link: linkId});
    });
  }

  logOut = () => {
    let { dispatch } = this.props;
    const action = actions.unset();
    dispatch(action);
  }
}

function mapStateToProps (state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(Header);