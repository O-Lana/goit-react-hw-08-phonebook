import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/authSelector';
import { Link } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      {isLoggedIn ? (
        <Link to="/contacts">Phonebook</Link>
      ) : (
        <Link to="/">Home</Link>
      )}
    </nav>
  );
};
