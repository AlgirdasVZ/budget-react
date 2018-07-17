import React from 'react';
import { StyledNavLink } from './Header.style';
import { startLogout } from '../../actions/auth';
import { connect } from 'react-redux';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Expensify</h1>

    <StyledNavLink to="/dashboard" activeClassName="is-active">Dashboard</StyledNavLink>
    <StyledNavLink to="/create" activeClassName="is-active">Add Expense</StyledNavLink>
    <StyledNavLink to="/help" activeClassName="is-active">Help</StyledNavLink>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);