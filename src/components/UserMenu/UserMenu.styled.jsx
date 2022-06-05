import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  font-size: 18px;
  color: #555;
  font-weight: 500;
  text-decoration: none;
  padding: 17px 6px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Button = styled.button`
  padding: 3px 10px;
  border: 1px solid #555;
  border-radius: 10px;
  font-weight: 500;

  :hover,
  :focus {
    color: #ffffff;
    background-color: var(--accent-color);
    border: 1px solid transparent;
  }
`;
