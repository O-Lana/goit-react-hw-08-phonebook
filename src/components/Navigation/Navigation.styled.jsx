import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;
  padding: 17px 6px;
  &:not(:last-child) {
    margin-right: 20px;
  }
  :hover,
  :focus {
    color: #f32160;
  }
  &.active {
    color: #f32160;
    border-bottom: 4px solid #f32160;
  }
`;
