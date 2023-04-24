import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-size: 20px;
  &.active {
    color: red;
  }
`;

export const LinkList = styled.ul`
  margin: 0;
  display: flex;
  padding: 15px;
  list-style: none;
  box-shadow: 0px 5px 5px grey;
`;

export const LinkItem = styled.li`
  margin-right: 20px;
`;
