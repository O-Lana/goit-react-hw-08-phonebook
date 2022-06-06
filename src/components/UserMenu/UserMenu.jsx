import { useSelector, useDispatch } from 'react-redux';
import { getUserEmail } from 'redux/auth/authSelector';
import { Wrapper, Text } from './UserMenu.styled';
import { Button } from '@mui/material';
import { grey } from '@mui/material/colors';
import authOperations from 'redux/auth/authOperation';
import LogoutIcon from '@mui/icons-material/Logout';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export const UserMenu = () => {
  const userEmail = useSelector(getUserEmail);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <MarkEmailReadIcon sx={{ color: grey[500] }} />
      <Text>{userEmail}</Text>
      <Button
        variant="contained"
        startIcon={<LogoutIcon />}
        onClick={() => dispatch(authOperations.logOut())}
        size="medium"
        sx={{ bgcolor: grey[500], '&:hover': { bgcolor: '#f32160' } }}
      >
        Log out
      </Button>
    </Wrapper>
  );
};
