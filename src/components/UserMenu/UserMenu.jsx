import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelector';
import authOperations from 'redux/auth/authOperation';
import { Wrapper, Text, Button } from './UserMenu.styled';

export const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Text>Welcome, {userEmail}!</Text>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
};
