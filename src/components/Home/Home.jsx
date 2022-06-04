import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { Wrapper, Title, NavLink } from './Home.styled';

export const Home = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Wrapper>
      <Title>Welcome to Phonebook app</Title>

      {isLoggedIn ? (
        <p>
          go to <NavLink to="/contacts">Phonebook</NavLink> page
        </p>
      ) : (
        <p>
          Please <NavLink to="/register">register</NavLink> or{' '}
          <NavLink to="/login">log in</NavLink> as a user{' '}
        </p>
      )}
    </Wrapper>
  );
};
