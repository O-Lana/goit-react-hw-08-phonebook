import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 56px);
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  text-align: center;
`;

export const NavLink = styled(Link)`
  color: #f54d7f;

  &:hover,
  &:focus {
    color: #d61b53;
  }
`;
