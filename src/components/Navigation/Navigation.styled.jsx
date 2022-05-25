import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  color: var(--text-color);
  font-weight: 500;
  text-decoration: none;
  padding: 17px 6px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  :hover,
  :focus {
    color: var(--accent-color);
  }
  &.active {
    color: var(--accent-color);
    border-bottom: 4px solid var(--accent-color);
  }
`;