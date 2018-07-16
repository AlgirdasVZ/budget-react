import React from 'react';
import { StyledNavLink } from './Header.style';

const Header = () => (
  <header>
    <h1>Expensify</h1>

    <StyledNavLink to="/" activeClassName="is-active" exact={true}>Dashboard</StyledNavLink>
    <StyledNavLink to="/create" activeClassName="is-active">Add Expense</StyledNavLink>
    <StyledNavLink to="/help" activeClassName="is-active">Help</StyledNavLink>
  </header>
);

export default Header;