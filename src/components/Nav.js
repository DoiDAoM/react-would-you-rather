import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser';

class Nav extends Component {
  
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(null))
  }

  render() {
    const { user } = this.props
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
            {`Hello ${user.name}`}
          </li>
          <li>
            <img
              src={user.avatarURL}
              alt={`Avatar of ${user.name}`}
              className='avatarr'
            />
          </li>
          <li>
            <NavLink to='/' activeClassName='active' onClick={this.handleLogout}>
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
  


function mapStateToProps ({ users, authedUser }) {
  const user = users[authedUser]
  return ({
      user,
  })
}

export default connect(mapStateToProps)(Nav)